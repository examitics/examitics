
import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiBell, FiCheck, FiRefreshCw, FiX } from "react-icons/fi";

import { useAuth } from "../../context/AuthContext";
import { supabase } from "../../lib/supabase";
import "./NotificationBell.css";

function NotificationBell() {
  const { user } = useAuth();

  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [readIds, setReadIds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [savingRead, setSavingRead] = useState(false);

  const loadNotifications = useCallback(async () => {
    if (!user?.id) {
      setNotifications([]);
      setReadIds([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const now = new Date().toISOString();

      const { data, error: fetchError } = await supabase
        .from("notifications")
        .select(
          "id, title, message, link, target_audience, target_exam, published_at, expires_at, created_at"
        )
        .eq("is_published", true)
        .lte("published_at", now)
        .order("published_at", { ascending: false })
        .limit(50);

      if (fetchError) throw fetchError;

      const currentTime = Date.now();

      const activeNotifications = (data || []).filter((item) => {
        return (
          !item.expires_at ||
          new Date(item.expires_at).getTime() > currentTime
        );
      });

      setNotifications(activeNotifications);

      const { data: reads, error: readsError } = await supabase
        .from("notification_reads")
        .select("notification_id")
        .eq("user_id", user.id);

      if (readsError) throw readsError;

      setReadIds((reads || []).map((item) => item.notification_id));
    } catch (err) {
      console.error("Loading notifications failed:", err);
      setError("Unable to load notifications. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [user?.id]);

  useEffect(() => {
    loadNotifications();
  }, [loadNotifications]);

  useEffect(() => {
    if (!open) return;

    loadNotifications();
  }, [open, loadNotifications]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const unreadCount = notifications.filter(
    (item) => !readIds.includes(item.id)
  ).length;

  const markAsRead = async (notificationId) => {
    if (!user?.id || readIds.includes(notificationId)) return;

    const { error: readError } = await supabase
      .from("notification_reads")
      .upsert(
        {
          user_id: user.id,
          notification_id: notificationId,
          read_at: new Date().toISOString(),
        },
        { onConflict: "notification_id,user_id" }
      );

    if (readError) {
      console.error("Marking notification as read failed:", readError);
      setError("Could not update read status.");
      return;
    }

    setReadIds((current) =>
      current.includes(notificationId)
        ? current
        : [...current, notificationId]
    );
  };

  const markAllAsRead = async () => {
    if (!user?.id || unreadCount === 0) return;

    setSavingRead(true);
    setError("");

    try {
      const unreadNotifications = notifications.filter(
        (item) => !readIds.includes(item.id)
      );

      const rows = unreadNotifications.map((item) => ({
        user_id: user.id,
        notification_id: item.id,
        read_at: new Date().toISOString(),
      }));

      const { error: readError } = await supabase
        .from("notification_reads")
        .upsert(rows, { onConflict: "notification_id,user_id" });

      if (readError) throw readError;

      setReadIds((current) => [
        ...new Set([
          ...current,
          ...unreadNotifications.map((item) => item.id),
        ]),
      ]);
    } catch (err) {
      console.error("Mark all as read failed:", err);
      setError("Could not mark all notifications as read.");
    } finally {
      setSavingRead(false);
    }
  };

  const formatDate = (value) => {
    if (!value) return "";

    return new Date(value).toLocaleString("en-PK", {
      day: "numeric",
      month: "short",
      hour: "numeric",
      minute: "2-digit",
    });
  };

  const safeLink = (value) => {
    if (!value) return null;

    if (value.startsWith("/") && !value.startsWith("//")) {
      return value;
    }

    try {
      const url = new URL(value);

      if (url.protocol === "https:") return url.href;
    } catch {
      // Invalid URL: do not render a clickable destination.
    }

    return null;
  };

  const renderDestination = (notification) => {
    const destination = safeLink(notification.link);

    if (!destination) return null;

    const handleClick = () => {
      markAsRead(notification.id);
      setOpen(false);
    };

    if (destination.startsWith("/")) {
      return (
        <Link
          to={destination}
          className="notification-open-link"
          onClick={handleClick}
        >
          View details
        </Link>
      );
    }

    return (
      <a
        href={destination}
        target="_blank"
        rel="noopener noreferrer"
        className="notification-open-link"
        onClick={handleClick}
      >
        View details
      </a>
    );
  };

  return (
    <div className="notification-bell-wrap">
      <button
        type="button"
        className="exa-icon-btn notification-bell-button"
        aria-label={
          unreadCount
            ? `Notifications, ${unreadCount} unread`
            : "Notifications"
        }
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={() => setOpen((current) => !current)}
      >
        <FiBell />

        {unreadCount > 0 && (
          <span className="notification-count">
            {unreadCount > 99 ? "99+" : unreadCount}
          </span>
        )}
      </button>

      {open && (
        <>
          <button
            type="button"
            className="notification-panel-backdrop"
            aria-label="Close notifications"
            onClick={() => setOpen(false)}
          />

          <section
            className="notification-panel"
            role="dialog"
            aria-label="Your notifications"
          >
            <div className="notification-panel-header">
              <div>
                <h3>Notifications</h3>
                <p>
                  {user
                    ? unreadCount > 0
                      ? `${unreadCount} unread`
                      : "You're all caught up"
                    : "Sign in to view announcements"}
                </p>
              </div>

              <button
                type="button"
                className="notification-panel-close"
                onClick={() => setOpen(false)}
                aria-label="Close notifications"
              >
                <FiX />
              </button>
            </div>

            {user && unreadCount > 0 && (
              <button
                type="button"
                className="notification-mark-all"
                onClick={markAllAsRead}
                disabled={savingRead}
              >
                <FiCheck />
                {savingRead ? "Updating..." : "Mark all as read"}
              </button>
            )}

            {error && (
              <div className="notification-panel-error" role="alert">
                {error}
                <button type="button" onClick={loadNotifications}>
                  Try again
                </button>
              </div>
            )}

            {!user ? (
              <div className="notification-panel-empty">
                <FiBell />
                <strong>Sign in to receive updates</strong>
                <p>
                  Sign in to view announcements for your account and exam.
                </p>
                <Link to="/login" onClick={() => setOpen(false)}>
                  Login
                </Link>
              </div>
            ) : loading ? (
              <div className="notification-panel-empty">
                <FiRefreshCw className="notification-spin" />
                <p>Loading announcements...</p>
              </div>
            ) : notifications.length === 0 ? (
              <div className="notification-panel-empty">
                <FiBell />
                <strong>No announcements yet</strong>
                <p>New updates will appear here.</p>
              </div>
            ) : (
              <div className="notification-panel-list">
                {notifications.map((notification) => {
                  const isRead = readIds.includes(notification.id);

                  return (
                    <article
                      key={notification.id}
                      className={`notification-item ${
                        isRead ? "notification-item-read" : "notification-item-unread"
                      }`}
                    >
                      <div className="notification-item-top">
                        <span className="notification-item-dot" />
                        <div className="notification-item-content">
                          <h4>{notification.title}</h4>
                          <p>{notification.message}</p>

                          <time dateTime={notification.published_at}>
                            {formatDate(notification.published_at)}
                          </time>

                          {renderDestination(notification)}
                        </div>
                      </div>

                      {!isRead && (
                        <button
                          type="button"
                          className="notification-mark-read"
                          onClick={() => markAsRead(notification.id)}
                        >
                          Mark as read
                        </button>
                      )}
                    </article>
                  );
                })}
              </div>
            )}

            {user && (
              <button
                type="button"
                className="notification-refresh"
                onClick={loadNotifications}
                disabled={loading}
              >
                <FiRefreshCw />
                Refresh notifications
              </button>
            )}
          </section>
        </>
      )}
    </div>
  );
}

export default NotificationBell;
