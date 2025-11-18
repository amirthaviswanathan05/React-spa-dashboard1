// src/pages/DashboardLayout.js
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function DashboardLayout() {
  const { logout } = useAuth();

  return (
    <div>
      <div className="card section">
        <div className="dashboard-header">
          <div>
            <h2 style={{ marginBottom: 4 }}>Dashboard</h2>
            <p style={{ fontSize: "0.85rem", color: "#6b7280" }}>
              Welcome to your student space. Manage profile, settings and
              notifications here.
            </p>
          </div>
          <button className="btn-secondary btn" onClick={logout}>
            Logout
          </button>
        </div>

        <div className="dashboard-tabs">
          <NavLink
            to="profile"
            className={({ isActive }) =>
              "dashboard-tab" + (isActive ? " dashboard-tab-active" : "")
            }
          >
            Profile
          </NavLink>
          <NavLink
            to="settings"
            className={({ isActive }) =>
              "dashboard-tab" + (isActive ? " dashboard-tab-active" : "")
            }
          >
            Settings
          </NavLink>
          <NavLink
            to="notifications"
            className={({ isActive }) =>
              "dashboard-tab" + (isActive ? " dashboard-tab-active" : "")
            }
          >
            Notifications
          </NavLink>
        </div>
      </div>

      {/* Nested content */}
      <Outlet />
    </div>
  );
}
