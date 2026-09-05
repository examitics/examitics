import React, { useEffect, useMemo, useState } from "react";
import {
  FiSearch,
  FiUsers,
  FiShield,
  FiUser,
  FiRefreshCw,
} from "react-icons/fi";

import { supabase } from "../../lib/supabase";

function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  const fetchUsers = async (isRefresh = false) => {
    try {
      setError("");

      if (isRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      const { data, error: fetchError } = await supabase
        .from("profiles")
        .select(
          "id, full_name, email, role, target_exam, created_at"
        )
        .order("created_at", {
          ascending: false,
        });

      if (fetchError) {
        throw fetchError;
      }

      setUsers(data || []);
    } catch (err) {
      console.error("Admin users error:", err);

      setError(
        err.message || "Unable to load users."
      );
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = useMemo(() => {
    const searchValue = search
      .trim()
      .toLowerCase();

    if (!searchValue) {
      return users;
    }

    return users.filter((user) => {
      return (
        user.full_name
          ?.toLowerCase()
          .includes(searchValue) ||
        user.email
          ?.toLowerCase()
          .includes(searchValue) ||
        user.target_exam
          ?.toLowerCase()
          .includes(searchValue) ||
        user.role
          ?.toLowerCase()
          .includes(searchValue)
      );
    });
  }, [users, search]);

  const formatDate = (date) => {
    if (!date) return "—";

    return new Date(date).toLocaleDateString(
      "en-PK",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  };

  const getInitial = (user) => {
    return (
      user.full_name ||
      user.email ||
      "U"
    )
      .charAt(0)
      .toUpperCase();
  };

  if (loading) {
    return (
      <div className="admin-users-loading">
        <FiRefreshCw className="admin-spin" />
        <span>Loading users...</span>
      </div>
    );
  }

  return (
    <div className="admin-users">

      {/* Page header */}
      <div className="admin-section-heading">
        <div>
          <h2>User Management</h2>
          <p>
            View and manage registered Examatics users.
          </p>
        </div>

        <button
          type="button"
          className="admin-refresh-btn"
          onClick={() => fetchUsers(true)}
          disabled={refreshing}
        >
          <FiRefreshCw
            className={
              refreshing ? "admin-spin" : ""
            }
          />

          {refreshing
            ? "Refreshing..."
            : "Refresh"}
        </button>
      </div>

      {/* Stats */}
      <div className="admin-users-stats">

        <div className="admin-user-stat">
          <div className="admin-user-stat-icon">
            <FiUsers />
          </div>

          <div>
            <span>Total Users</span>
            <strong>{users.length}</strong>
          </div>
        </div>

        <div className="admin-user-stat">
          <div className="admin-user-stat-icon">
            <FiShield />
          </div>

          <div>
            <span>Administrators</span>

            <strong>
              {
                users.filter(
                  (user) =>
                    user.role === "admin"
                ).length
              }
            </strong>
          </div>
        </div>

        <div className="admin-user-stat">
          <div className="admin-user-stat-icon">
            <FiUser />
          </div>

          <div>
            <span>Regular Users</span>

            <strong>
              {
                users.filter(
                  (user) =>
                    user.role !== "admin"
                ).length
              }
            </strong>
          </div>
        </div>

      </div>

      {/* Search */}
      <div className="admin-users-toolbar">

        <div className="admin-search-box">
          <FiSearch />

          <input
            type="text"
            placeholder="Search by name, email, exam or role..."
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
          />
        </div>

        <div className="admin-users-count">
          Showing{" "}
          <strong>
            {filteredUsers.length}
          </strong>{" "}
          of{" "}
          <strong>
            {users.length}
          </strong>{" "}
          users
        </div>

      </div>

      {/* Error */}
      {error && (
        <div className="admin-error">
          {error}
        </div>
      )}

      {/* Users table */}
      <div className="admin-users-table-wrapper">

        <table className="admin-users-table">

          <thead>
            <tr>
              <th>User</th>
              <th>Role</th>
              <th>Target Exam</th>
              <th>Joined</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.length === 0 ? (
              <tr>
                <td
                  colSpan="4"
                  className="admin-empty-users"
                >
                  <FiUsers />

                  <strong>
                    No users found
                  </strong>

                  <span>
                    Try changing your search.
                  </span>
                </td>
              </tr>
            ) : (
              filteredUsers.map((user) => (
                <tr key={user.id}>

                  <td>
                    <div className="admin-user-cell">

                      <div className="admin-table-avatar">
                        {getInitial(user)}
                      </div>

                      <div className="admin-table-user-info">
                        <strong>
                          {user.full_name ||
                            "Unnamed User"}
                        </strong>

                        <span>
                          {user.email ||
                            "No email"}
                        </span>
                      </div>

                    </div>
                  </td>

                  <td>
                    {user.role === "admin" ? (
                      <span className="admin-role admin-role-admin">
                        <FiShield />
                        Admin
                      </span>
                    ) : (
                      <span className="admin-role admin-role-user">
                        <FiUser />
                        User
                      </span>
                    )}
                  </td>

                  <td>
                    <span className="admin-exam">
                      {user.target_exam ||
                        "Not selected"}
                    </span>
                  </td>

                  <td>
                    <span className="admin-date">
                      {formatDate(
                        user.created_at
                      )}
                    </span>
                  </td>

                </tr>
              ))
            )}
          </tbody>

        </table>

      </div>

    </div>
  );
}

export default AdminUsers;