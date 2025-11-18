// src/pages/Profile.js
import React from "react";

export default function Profile() {
  const profile = {
    name: "AMIRTHAVARSHINI V",
    username: "23001530",
    email: "amirthavarshiniv536@gmail.com",
    phone: "6384110754",
    role: "Student",
    department: "CSE",
    year: "3RD Year, 5th sem",
    regNo: "212223040014",
    college: "Saveetha Engineering College",
    location: "Chennai, Tamil Nadu, India",
    admissionDate: "Sep 4th, 2023",
  };

  return (
    <section className="section">
      <div className="card">
        <h2>Profile</h2>
        <p style={{ fontSize: "0.85rem", color: "#6b7280", marginTop: 4 }}>
          Your basic academic and contact information.
        </p>

        <div className="info-grid" style={{ marginTop: 16 }}>
          <Info label="Name" value={profile.name} />
          <Info label="Username" value={profile.username} />
          <Info label="Register No" value={profile.regNo} />
          <Info label="Role" value={profile.role} />
          <Info label="Department" value={profile.department} />
          <Info label="Year / Semester" value={profile.year} />
          <Info label="Email" value={profile.email} />
          <Info label="Phone" value={profile.phone} />
          <Info label="College" value={profile.college} />
          <Info label="Location" value={profile.location} />
          <Info label="Date of Admission" value={profile.admissionDate} />
        </div>
      </div>
    </section>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <div className="info-label">{label}</div>
      <div className="info-value">{value}</div>
    </div>
  );
}
