
import React, { useCallback, useEffect, useState } from "react";
import {
  FiBell,
  FiRefreshCw,
  FiSend,
  FiTrash2,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";

import { useAuth } from "../../context/AuthContext";
import { supabase } from "../../lib/supabase";
import "../../styles/AdminNotifications.css";

const initialForm = {
  title: "",
  message: "",
  link: "",
  target_audience: "all",
  target_exam: "",
  is_published: true,
  expires_at: "",
};

const audienceLabels = {
  all: "All registered users",
  free: "Free users",
  premium: "Premium users",
  exam: "Specific exam candidates",
};

function AdminNotifications() {
  const { user } = useAuth();

  const [notifications, setNotifications] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [busyId, setBusyId] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const loadNotifications = useCallback(async () => {
    setLoading(true);
    setError("");

    const { data, error: fetchError } = await supabase
      .from("notifications")
      .select("*")
      .order("created_at", { ascending: false });

    if (fetchError) {
      console.error("Notification loading failed:", fetchError);
      setError(fetchError.message || "Could not load announcements.");
      setNotifications([]);
    } else {
      setNotifications(data || []);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    loadNotifications();
  }, [loadNotifications]);

  const updateField = (event) => {
    const { name, value, type, checked } = event.target;

    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCreate = async (event) => {
    event.preventDefault();

    if (!user?.id) {
      setError("Your admin session could not be verified.");
      return;
    }

    setSaving(true);
    setError("");
    setMessage("");

    try {
      const title = form.title.trim();
      const body = form.message.trim();

      if (!title || !body) {
        throw new Error("Enter both a title and a message.");
      }

      if (
        form.target_audience === "exam" &&
        !form.target_exam.trim()
      ) {
        throw new Error("Enter the exact target exam label.");
      }

      let link = form.link.trim();

      if (link) {
        const isInternal = link.startsWith("/") && !link.startsWith("//");
        const isHttps = /^https:\/\/\S+$/i.test(link);

        if (!isInternal && !isHttps) {
          throw new Error(
            "Use an internal path such as /mock or an HTTPS URL."
          );
        }
      }

      const publishedAt = form.is_published
        ? new Date().toISOString()
        : null;

      const expiresAt = form.expires_at
        ? new Date(form.expires_at).toISOString()
        : null;

      if (
        expiresAt &&
        publishedAt &&
        new Date(expiresAt) <= new Date(publishedAt)
      ) {
        throw new Error("Expiry must be after the publication time.");
      }

      const payload = {
        title,
        message: body,
        link: link || null,
        target_audience: form.target_audience,
        target_exam:
          form.target_audience === "exam"
            ? form.target_exam.trim()
            : null,
        is_published: form.is_published,
        published_at: publishedAt,
        expires_at: expiresAt,
        created_by: user.id,
      };

      const { error: insertError } = await supabase
        .from("notifications")
        .insert(payload);

      if (insertError) throw insertError;

      setForm(initialForm);
      setMessage(
        form.is_published
          ? "Announcement published successfully."
          : "Announcement saved as a draft."
      );

      await loadNotifications();
    } catch (err) {
      console.error("Announcement creation failed:", err);
      setError(err.message || "Could not save the announcement.");
    } finally {
      setSaving(false);
    }
  };

  const togglePublished = async (notification) => {
    setBusyId(notification.id);
    setError("");
    setMessage("");

    try {
      const publish = !notification.is_published;

      const { error: updateError } = await supabase
        .from("notifications")
        .update({
          is_published: publish,
          published_at: publish ? new Date().toISOString() : null,
        })
        .eq("id", notification.id);

      if (updateError) throw updateError;

      setMessage(
        publish
          ? "Announcement published."
          : "Announcement unpublished."
      );

      await loadNotifications();
    } catch (err) {
      console.error("Announcement update failed:", err);
      setError(err.message || "Could not update announcement.");
    } finally {
      setBusyId("");
    }
  };

  const deleteNotification = async (notification) => {
    const confirmed = window.confirm(
      `Delete "${notification.title}" permanently? This cannot be undone.`
    );

    if (!confirmed) return;

    setBusyId(notification.id);
    setError("");
    setMessage("");

    try {
      const { error: deleteError } = await supabase
        .from("notifications")
        .delete()
        .eq("id", notification.id);

      if (deleteError) throw deleteError;

      setNotifications((current) =>
        current.filter((item) => item.id !== notification.id)
      );

      setMessage("Announcement deleted.");
    } catch (err) {
      console.error("Announcement deletion failed:", err);
      setError(err.message || "Could not delete announcement.");
    } finally {
      setBusyId("");
    }
  };

  const formatDate = (value) => {
    if (!value) return "Not scheduled";

    return new Date(value).toLocaleString("en-PK", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  return (
    <div className="admin-notifications">
      <div className="admin-section-heading">
        <div>
          <h2>Notifications</h2>
          <p>
            Publish announcements to free users, premium users,
            or candidates preparing for a specific exam.
          </p>
        </div>

        <button
          type="button"
          className="admin-refresh-btn"
          onClick={loadNotifications}
          disabled={loading}
        >
          <FiRefreshCw />
          Refresh
        </button>
      </div>

      <form className="notification-admin-form" onSubmit={handleCreate}>
        <h3>
          <FiSend /> Create announcement
        </h3>

        <div className="notification-form-group">
          <label htmlFor="notification-title">Title</label>
          <input
            id="notification-title"
            name="title"
            value={form.title}
            onChange={updateField}
            maxLength={140}
            placeholder="e.g. New PMA mock tests available"
            required
          />
        </div>

        <div className="notification-form-group">
          <label htmlFor="notification-message">Message</label>
          <textarea
            id="notification-message"
            name="message"
            value={form.message}
            onChange={updateField}
            maxLength={3000}
            rows={4}
            placeholder="Write the announcement for candidates..."
            required
          />
        </div>

        <div className="notification-form-grid">
          <div className="notification-form-group">
            <label htmlFor="notification-audience">Audience</label>
            <select
              id="notification-audience"
              name="target_audience"
              value={form.target_audience}
              onChange={updateField}
            >
              <option value="all">All registered users</option>
              <option value="free">Free users only</option>
              <option value="premium">Premium users only</option>
              <option value="exam">Specific exam candidates</option>
            </select>
          </div>

          <div className="notification-form-group">
            <label htmlFor="notification-expiry">
              Expiry (optional)
            </label>
            <input
              id="notification-expiry"
              name="expires_at"
              type="datetime-local"
              value={form.expires_at}
              onChange={updateField}
            />
          </div>
        </div>

        {form.target_audience === "exam" && (
          <div className="notification-form-group">
            <label htmlFor="notification-exam">Target exam label</label>
            <input
              id="notification-exam"
              name="target_exam"
              value={form.target_exam}
              onChange={updateField}
              placeholder="Enter the exact value from profiles.target_exam"
              required
            />
            <small>
              This must match the candidate's saved target_exam value.
            </small>
          </div>
        )}

        <div className="notification-form-group">
          <label htmlFor="notification-link">
            Destination link (optional)
          </label>
          <input
            id="notification-link"
            name="link"
            type="text"
            value={form.link}
            onChange={updateField}
            placeholder="/mock or https://www.examitics.com/mock"
          />
        </div>

        <label className="notification-publish-toggle">
          <input
            type="checkbox"
            name="is_published"
            checked={form.is_published}
            onChange={updateField}
          />
          Publish immediately
        </label>

        {error && (
          <p className="notification-admin-error" role="alert">
            {error}
          </p>
        )}

        {message && (
          <p className="notification-admin-success" role="status">
            {message}
          </p>
        )}

        <button
          type="submit"
          className="notification-submit-btn"
          disabled={saving}
        >
          <FiSend />
          {saving
            ? "Saving..."
            : form.is_published
              ? "Publish announcement"
              : "Save draft"}
        </button>
      </form>

      <div className="notification-admin-list-heading">
        <h3>Existing announcements</h3>
        <span>{notifications.length} total</span>
      </div>

      {loading && <p>Loading announcements...</p>}

      {!loading && !error && notifications.length === 0 && (
        <p>No announcements have been created yet.</p>
      )}

      <div className="notification-admin-list">
        {notifications.map((notification) => (
          <article
            key={notification.id}
            className="notification-admin-item"
          >
            <div className="notification-admin-item-top">
              <div className="notification-admin-item-icon">
                <FiBell />
              </div>

              <div className="notification-admin-item-content">
                <h4>{notification.title}</h4>
                <p>{notification.message}</p>

                <div className="notification-admin-meta">
                  <span>
                    {audienceLabels[notification.target_audience] ||
                      notification.target_audience}
                    {notification.target_exam
                      ? `: ${notification.target_exam}`
                      : ""}
                  </span>
                  <span>
                    Created {formatDate(notification.created_at)}
                  </span>
                  {notification.expires_at && (
                    <span>
                      Expires {formatDate(notification.expires_at)}
                    </span>
                  )}
                </div>

                <span
                  className={
                    notification.is_published
                      ? "notification-status is-published"
                      : "notification-status is-draft"
                  }
                >
                  {notification.is_published ? "Published" : "Draft"}
                </span>
              </div>
            </div>

            <div className="notification-admin-actions">
              <button
                type="button"
                onClick={() => togglePublished(notification)}
                disabled={busyId === notification.id}
              >
                {notification.is_published ? <FiEyeOff /> : <FiEye />}
                {notification.is_published ? "Unpublish" : "Publish"}
              </button>

              <button
                type="button"
                className="notification-delete-btn"
                onClick={() => deleteNotification(notification)}
                disabled={busyId === notification.id}
              >
                <FiTrash2 />
                Delete
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default AdminNotifications;
