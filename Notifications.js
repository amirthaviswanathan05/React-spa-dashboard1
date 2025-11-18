// src/pages/Notifications.js
import React, { useEffect, useState } from "react";

const STORAGE_KEY = "user_notifications_v1";

const defaultNotifications = [
  {
    id: 1,
    title: "New assignment uploaded",
    body: "Assignment 4 for Data Structures has been uploaded.",
    time: "10 mins ago",
    read: false,
  },
  {
    id: 2,
    title: "Internal marks updated",
    body: "Quiz 3 marks are now available in the portal.",
    time: "1 hour ago",
    read: false,
  },
  {
    id: 3,
    title: "Profile updated successfully",
    body: "Your recent changes to the profile were saved.",
    time: "Yesterday",
    read: true,
  },
  {
    id: 4,
    title: "Tech Fest registration",
    body: "Registrations for the annual Tech Fest open tomorrow.",
    time: "2 days ago",
    read: false,
  },
];

export default function Notifications() {
  const [notifications, setNotifications] = useState(defaultNotifications);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setNotifications(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notifications));
  }, [notifications]);

  function toggleRead(id) {
    setNotifications((list) =>
      list.map((n) => (n.id === id ? { ...n, read: !n.read } : n))
    );
  }

  function markAllRead() {
    setNotifications((list) => list.map((n) => ({ ...n, read: true })));
  }

  function clearAll() {
    if (window.confirm("Clear all notifications?")) {
      setNotifications([]);
    }
  }

  return (
    <section className="section">
      <div className="card">
        <div className="dashboard-header">
          <div>
            <h2>Notifications</h2>
            <p
              style={{
                fontSize: "0.85rem",
                color: "#6b7280",
                marginTop: 4,
              }}
            >
              Stay updated with recent activities in your student portal.
            </p>
          </div>
          <div className="btn-group">
            <button className="btn-secondary btn" onClick={markAllRead}>
              Mark all as read
            </button>
            <button className="btn-secondary btn" onClick={clearAll}>
              Clear all
            </button>
          </div>
        </div>

        {notifications.length === 0 ? (
          <p style={{ marginTop: 10, fontSize: "0.9rem" }}>
            No notifications at the moment.
          </p>
        ) : (
          <ul className="notifications-list">
            {notifications.map((n) => (
              <li
                key={n.id}
                className={
                  "notification-item" +
                  (n.read ? "" : " notification-item-unread")
                }
              >
                <div className="notification-title">{n.title}</div>
                <div className="notification-time">{n.time}</div>
                <div className="notification-body">{n.body}</div>
                <div style={{ marginTop: 6 }}>
                  <button
                    className="btn-secondary btn"
                    onClick={() => toggleRead(n.id)}
                  >
                    {n.read ? "Mark as unread" : "Mark as read"}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
