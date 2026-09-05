import React, { useEffect, useMemo, useState } from "react";
import { supabase } from "../../lib/supabase";
import {
  FiRefreshCw,
  FiSearch,
  FiPlus,
  FiEdit2,
  FiX,
} from "react-icons/fi";

// import "../styles/Admin.css";


function AdminSubscriptions() {
  const [subscriptions, setSubscriptions] = useState([]);
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [editingSubscription, setEditingSubscription] = useState(null);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    userId: "",
    plan: "monthly",
    status: "active",
    startedAt: "",
    expiresAt: "",
  });

//   const fetchSubscriptions = async (isRefresh = false) => {
//     if (isRefresh) {
//       setRefreshing(true);
//     } else {
//       setLoading(true);
//     }

//     setError("");

//     const { data, error: fetchError } = await supabase
//       .from("subscriptions")
//       .select(`
//         id,
//         user_id,
//         plan,
//         status,
//         started_at,
//         expires_at,
//         created_at,
//         updated_at,
//         profiles (
//           full_name,
//           email,
//           target_exam
//         )
//       `)
//       .order("created_at", { ascending: false });

//     if (fetchError) {
//       console.error("Error fetching subscriptions:", fetchError);
//       setError(fetchError.message);
//       setSubscriptions([]);
//     } else {
//       const formattedData = (data || []).map((subscription) => ({
//         ...subscription,
//         full_name: subscription.profiles?.full_name || "",
//         email: subscription.profiles?.email || "",
//         target_exam: subscription.profiles?.target_exam || "",
//       }));

//       setSubscriptions(formattedData);
//     }

//     setLoading(false);
//     setRefreshing(false);
//   };
const fetchUsers = async () => {
  const { data, error: fetchError } = await supabase
    .from("profiles")
    .select("id, full_name, email, target_exam")
    .order("created_at", { ascending: false });

  if (fetchError) {
    console.error("Error fetching users:", fetchError);
    setError(fetchError.message);
    setUsers([]);
    return;
  }

  setUsers(data || []);
};

const fetchSubscriptions = async (isRefresh = false) => {
  if (isRefresh) {
    setRefreshing(true);
  } else {
    setLoading(true);
  }

  setError("");

  const { data, error: fetchError } = await supabase.rpc(
    "admin_get_subscriptions"
  );

  if (fetchError) {
    console.error("Error fetching subscriptions:", fetchError);
    setError(fetchError.message);
    setSubscriptions([]);
  } else {
    setSubscriptions(data || []);
  }

  setLoading(false);
  setRefreshing(false);
};

  useEffect(() => {
    fetchSubscriptions();
     fetchUsers();
  }, []);

  const filteredSubscriptions = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return subscriptions;
    }

    return subscriptions.filter((subscription) => {
      return (
        subscription.full_name?.toLowerCase().includes(query) ||
        subscription.email?.toLowerCase().includes(query) ||
        subscription.plan?.toLowerCase().includes(query) ||
        subscription.status?.toLowerCase().includes(query) ||
        subscription.target_exam?.toLowerCase().includes(query)
      );
    });
  }, [subscriptions, search]);

  const stats = useMemo(() => {
    return {
      total: subscriptions.length,

      active: subscriptions.filter(
        (subscription) => subscription.status === "active"
      ).length,

      monthly: subscriptions.filter(
        (subscription) => subscription.plan === "monthly"
      ).length,

      yearly: subscriptions.filter(
        (subscription) => subscription.plan === "yearly"
      ).length,

      lifetime: subscriptions.filter(
        (subscription) => subscription.plan === "lifetime"
      ).length,

      free: subscriptions.filter(
        (subscription) => subscription.plan === "free"
      ).length,
    };
  }, [subscriptions]);

  const formatDate = (date) => {
    if (!date) return "—";

    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getUserName = (subscription) => {
    return (
      subscription.full_name?.trim() ||
      subscription.email ||
      "Unknown User"
    );
  };

  const getInitial = (subscription) => {
    return getUserName(subscription).charAt(0).toUpperCase();
  };

  const openCreateModal = () => {
    setEditingSubscription(null);

    setForm({
      userId: "",
      plan: "monthly",
      status: "active",
      startedAt: new Date().toISOString().slice(0, 16),
      expiresAt: "",
    });

    setMessage("");
    setShowModal(true);
  };

  const openEditModal = (subscription) => {
    setEditingSubscription(subscription);

    setForm({
      userId: subscription.user_id,
      plan: subscription.plan,
      status: subscription.status,
      startedAt: subscription.started_at
        ? new Date(subscription.started_at).toISOString().slice(0, 16)
        : "",
      expiresAt: subscription.expires_at
        ? new Date(subscription.expires_at).toISOString().slice(0, 16)
        : "",
    });

    setMessage("");
    setShowModal(true);
  };

  const closeModal = () => {
    if (saving) return;

    setShowModal(false);
    setEditingSubscription(null);
    setMessage("");
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSave = async (event) => {
    event.preventDefault();

    setSaving(true);
    setMessage("");

    try {
      if (!editingSubscription) {
        if (!form.userId.trim()) {
          throw new Error("User ID is required.");
        }

        const { error: createError } = await supabase.rpc(
          "admin_create_subscription",
          {
            target_user_id: form.userId.trim(),
            target_plan: form.plan,
            target_status: form.status,
            target_started_at: form.startedAt
              ? new Date(form.startedAt).toISOString()
              : new Date().toISOString(),
            target_expires_at: form.expiresAt
              ? new Date(form.expiresAt).toISOString()
              : null,
          }
        );

        if (createError) {
          throw createError;
        }

        setMessage("Subscription created successfully.");
      } else {
        const { error: updateError } = await supabase.rpc(
          "admin_update_subscription",
          {
            subscription_id: editingSubscription.id,
            target_plan: form.plan,
            target_status: form.status,
            target_started_at: form.startedAt
              ? new Date(form.startedAt).toISOString()
              : null,
            target_expires_at: form.expiresAt
              ? new Date(form.expiresAt).toISOString()
              : null,
          }
        );

        if (updateError) {
          throw updateError;
        }

        setMessage("Subscription updated successfully.");
      }

      await fetchSubscriptions(true);

      setTimeout(() => {
        closeModal();
      }, 700);
    } catch (saveError) {
      console.error("Subscription save error:", saveError);
      setMessage(saveError.message || "Something went wrong.");
    } finally {
      setSaving(false);
    }
  };

  const handleCancelSubscription = async (subscription) => {
    const userName = getUserName(subscription);

    const confirmed = window.confirm(
      `Cancel the subscription for ${userName}?`
    );

    if (!confirmed) return;

    setError("");

    const { error: cancelError } = await supabase.rpc(
      "admin_cancel_subscription",
      {
        subscription_id: subscription.id,
      }
    );

    if (cancelError) {
      console.error("Cancel subscription error:", cancelError);
      setError(cancelError.message);
      return;
    }

    await fetchSubscriptions(true);
  };

  if (loading) {
    return (
      <div className="admin-section-loading">
        Loading subscriptions...
      </div>
    );
  }

  return (
    <div className="admin-subscriptions">
      {/* Header */}
      <div className="admin-section-header">
        <div>
          <h2>Subscriptions</h2>
          <p>Manage Examatics user subscription plans and access.</p>
        </div>

        <div className="admin-section-actions">
          <button
            type="button"
            className="admin-btn admin-btn-secondary"
            onClick={() => fetchSubscriptions(true)}
            disabled={refreshing}
          >
            <FiRefreshCw className={refreshing ? "admin-spin" : ""} />
            Refresh
          </button>

          <button
            type="button"
            className="admin-btn admin-btn-primary"
            onClick={openCreateModal}
          >
            <FiPlus />
            Add Subscription
          </button>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="admin-alert admin-alert-error">
          {error}
        </div>
      )}

      {/* Stats */}
      <div className="admin-subscription-stats">
        <div className="admin-stat-card">
          <span>Total</span>
          <strong>{stats.total}</strong>
        </div>

        <div className="admin-stat-card">
          <span>Active</span>
          <strong>{stats.active}</strong>
        </div>

        <div className="admin-stat-card">
          <span>Free</span>
          <strong>{stats.free}</strong>
        </div>

        <div className="admin-stat-card">
          <span>Monthly</span>
          <strong>{stats.monthly}</strong>
        </div>

        <div className="admin-stat-card">
          <span>Yearly</span>
          <strong>{stats.yearly}</strong>
        </div>

        <div className="admin-stat-card">
          <span>Lifetime</span>
          <strong>{stats.lifetime}</strong>
        </div>
      </div>

      {/* Search */}
      <div className="admin-table-toolbar">
        <div className="admin-search-box">
          <FiSearch />

          <input
            type="text"
            placeholder="Search user, email, plan, status..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <span className="admin-result-count">
          {filteredSubscriptions.length} subscription
          {filteredSubscriptions.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Table */}
      <div className="admin-table-card">
        <div className="admin-table-wrapper">
          <table className="admin-table admin-subscriptions-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Plan</th>
                <th>Status</th>
                <th>Started</th>
                <th>Expires</th>
                <th>Target Exam</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredSubscriptions.length === 0 ? (
                <tr>
                  <td colSpan="7" className="admin-empty-state">
                    No subscriptions found.
                  </td>
                </tr>
              ) : (
                filteredSubscriptions.map((subscription) => (
                  <tr key={subscription.id}>
                    <td>
                      <div className="admin-user-cell">
                        <div className="admin-user-avatar">
                          {getInitial(subscription)}
                        </div>

                        <div>
                          <strong>{getUserName(subscription)}</strong>

                          {subscription.full_name && subscription.email && (
                            <span>{subscription.email}</span>
                          )}

                          {!subscription.full_name &&
                            subscription.email && (
                              <span>User account</span>
                            )}
                        </div>
                      </div>
                    </td>

                    <td>
                      <span
                        className={`admin-plan-badge admin-plan-${subscription.plan}`}
                      >
                        {subscription.plan}
                      </span>
                    </td>

                    <td>
                      <span
                        className={`admin-status-badge admin-status-${subscription.status}`}
                      >
                        {subscription.status}
                      </span>
                    </td>

                    <td>{formatDate(subscription.started_at)}</td>

                    <td>
                      {subscription.plan === "lifetime"
                        ? "Never"
                        : formatDate(subscription.expires_at)}
                    </td>

                    <td>
                      {subscription.target_exam || "—"}
                    </td>

                    <td>
                      <div className="admin-action-buttons">
                        <button
                          type="button"
                          className="admin-icon-btn"
                          title="Edit subscription"
                          onClick={() => openEditModal(subscription)}
                        >
                          <FiEdit2 />
                        </button>

                        {subscription.status === "active" && (
                          <button
                            type="button"
                            className="admin-icon-btn admin-icon-danger"
                            title="Cancel subscription"
                            onClick={() =>
                              handleCancelSubscription(subscription)
                            }
                          >
                            <FiX />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="admin-modal-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >
          <div className="admin-modal">
            <div className="admin-modal-header">
              <div>
                <h3>
                  {editingSubscription
                    ? "Edit Subscription"
                    : "Add Subscription"}
                </h3>

                <p>
                  {editingSubscription
                    ? "Update the user's subscription."
                    : "Create a subscription for a user."}
                </p>
              </div>

              <button
                type="button"
                className="admin-modal-close"
                onClick={closeModal}
                disabled={saving}
              >
                <FiX />
              </button>
            </div>

            <form onSubmit={handleSave}>
              {/* {!editingSubscription && (
                <div className="admin-form-group">
                  <label htmlFor="userId">
                    User ID
                  </label>

                  <input
                    id="userId"
                    name="userId"
                    type="text"
                    value={form.userId}
                    onChange={handleFormChange}
                    placeholder="Paste Supabase user UUID"
                    required
                  />

                  <small>
                    Use the user's UUID from the Users section.
                  </small>
                </div>
              )} */}

              {!editingSubscription && (
  <div className="admin-form-group">
    <label htmlFor="userId">
      Select User
    </label>

    <select
      id="userId"
      name="userId"
      value={form.userId}
      onChange={handleFormChange}
      required
    >
      <option value="">
        -- Select a user --
      </option>

      {users
        .filter(
          (user) =>
            !subscriptions.some(
              (subscription) => subscription.user_id === user.id
            )
        )
        .map((user) => (
          <option key={user.id} value={user.id}>
            {user.full_name || user.email || "Unknown User"}
            {user.email && user.full_name
              ? ` — ${user.email}`
              : ""}
          </option>
        ))}
    </select>

    <small>
      Select the Examatics user who should receive this subscription.
    </small>
  </div>
)}

              {editingSubscription && (
                <div className="admin-subscription-user-info">
                  <span>User</span>
                  <strong>
                    {getUserName(editingSubscription)}
                  </strong>

                  {editingSubscription.email && (
                    <small>{editingSubscription.email}</small>
                  )}
                </div>
              )}

              <div className="admin-form-grid">
                <div className="admin-form-group">
                  <label htmlFor="plan">
                    Plan
                  </label>

                  <select
                    id="plan"
                    name="plan"
                    value={form.plan}
                    onChange={handleFormChange}
                  >
                    <option value="free">Free</option>
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                    <option value="lifetime">Lifetime</option>
                  </select>
                </div>

                <div className="admin-form-group">
                  <label htmlFor="status">
                    Status
                  </label>

                  <select
                    id="status"
                    name="status"
                    value={form.status}
                    onChange={handleFormChange}
                  >
                    <option value="active">Active</option>
                    <option value="expired">Expired</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </div>

              <div className="admin-form-grid">
                <div className="admin-form-group">
                  <label htmlFor="startedAt">
                    Started At
                  </label>

                  <input
                    id="startedAt"
                    name="startedAt"
                    type="datetime-local"
                    value={form.startedAt}
                    onChange={handleFormChange}
                  />
                </div>

                <div className="admin-form-group">
                  <label htmlFor="expiresAt">
                    Expires At
                  </label>

                  <input
                    id="expiresAt"
                    name="expiresAt"
                    type="datetime-local"
                    value={form.expiresAt}
                    onChange={handleFormChange}
                  />

                  <small>
                    Leave empty for lifetime or non-expiring access.
                  </small>
                </div>
              </div>

              {message && (
                <div
                  className={`admin-alert ${
                    message.toLowerCase().includes("success")
                      ? "admin-alert-success"
                      : "admin-alert-error"
                  }`}
                >
                  {message}
                </div>
              )}

              <div className="admin-modal-footer">
                <button
                  type="button"
                  className="admin-btn admin-btn-secondary"
                  onClick={closeModal}
                  disabled={saving}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="admin-btn admin-btn-primary"
                  disabled={saving}
                >
                  {saving
                    ? "Saving..."
                    : editingSubscription
                    ? "Update Subscription"
                    : "Create Subscription"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminSubscriptions;