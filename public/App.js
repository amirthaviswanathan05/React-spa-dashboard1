// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import DashboardLayout from "./pages/DashboardLayout";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications";
import { AuthProvider } from "./auth/AuthContext";
import ProtectedRoute from "./auth/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app-shell">
          <div className="app-main">
            {/* Top Nav */}
            <header className="app-nav">
              <div className="app-logo">Student Dashboard</div>
              <nav className="app-menu">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "app-link" + (isActive ? " app-link-active" : "")
                  }
                  end
                >
                  Home
                </NavLink>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    "app-link" + (isActive ? " app-link-active" : "")
                  }
                >
                  Login
                </NavLink>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    "app-link" + (isActive ? " app-link-active" : "")
                  }
                >
                  Dashboard
                </NavLink>
              </nav>
            </header>

            {/* Content */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />

              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <DashboardLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<div className="card">Select a section from above: Profile, Settings or Notifications.</div>} />
                <Route path="profile" element={<Profile />} />
                <Route path="settings" element={<Settings />} />
                <Route path="notifications" element={<Notifications />} />
              </Route>

              <Route path="*" element={<div className="card">404 — Page not found</div>} />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
