// src/pages/Settings.js
import React, { useEffect, useState } from "react";

const STORAGE_KEY = "user_settings_v1";

const defaultSettings = {
  darkMode: true,
  emailNotifications: true,
  smsNotifications: true,
  pushNotifications: true,
  language: "English",
  timezone: "Asia/Kolkata",
  allowSystemEmail: true,
  showProfilePublic: true,
};

export default function Settings() {
  const [settings, setSettings] = useState(defaultSettings);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setSettings(JSON.parse(raw));
    } catch {}
  }, []);

  // Apply theme
  useEffect(() => {
    if (settings.darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  }, [settings]);

  function handleChange(e) {
    const { name, type, checked, value } = e.target;
    setSettings((s) => ({
      ...s,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  return (
    <section className="section">
      <div className="card">
        <h2>Settings</h2>
        <p style={{ fontSize: "0.85rem", color: "#6b7280", marginTop: 4 }}>
          Personalize your dashboard preferences.
        </p>

        <div className="info-grid" style={{ marginTop: 16 }}>
          {/* Appearance */}
          <div>
            <h3 style={{ fontSize: "0.95rem", marginBottom: 6 }}>Appearance</h3>
            <label className="field-inline">
              <input
                type="checkbox"
                name="darkMode"
                checked={settings.darkMode}
                onChange={handleChange}
              />
              Enable dark mode
            </label>
          </div>

          {/* Notifications */}
          <div>
            <h3 style={{ fontSize: "0.95rem", marginBottom: 6 }}>
              Notification Settings
            </h3>
            <label className="field-inline">
              <input
                type="checkbox"
                name="emailNotifications"
                checked={settings.emailNotifications}
                onChange={handleChange}
              />
              Email notifications
            </label>
            <label className="field-inline">
              <input
                type="checkbox"
                name="smsNotifications"
                checked={settings.smsNotifications}
                onChange={handleChange}
              />
              SMS notifications
            </label>
            <label className="field-inline">
              <input
                type="checkbox"
                name="pushNotifications"
                checked={settings.pushNotifications}
                onChange={handleChange}
              />
              Push notifications
            </label>
            <label className="field-inline">
              <input
                type="checkbox"
                name="allowSystemEmail"
                checked={settings.allowSystemEmail}
                onChange={handleChange}
              />
              Allow system emails
            </label>
          </div>

          {/* Language & timezone */}
          <div>
            <h3 style={{ fontSize: "0.95rem", marginBottom: 6 }}>Account</h3>
            <label>
              <div className="info-label">Language</div>
              <select
                name="language"
                className="select"
                value={settings.language}
                onChange={handleChange}
              >
                <option>English</option>
                <option>Tamil</option>
              </select>
            </label>
            <label style={{ marginTop: 8, display: "block" }}>
              <div className="info-label">Timezone</div>
              <input
                name="timezone"
                className="input"
                value={settings.timezone}
                onChange={handleChange}
              />
            </label>
          </div>

          {/* Privacy */}
          <div>
            <h3 style={{ fontSize: "0.95rem", marginBottom: 6 }}>Privacy</h3>
            <label className="field-inline">
              <input
                type="checkbox"
                name="showProfilePublic"
                checked={settings.showProfilePublic}
                onChange={handleChange}
              />
              Show profile publicly
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
