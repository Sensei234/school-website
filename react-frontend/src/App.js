import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Login from "./components/Login";
import AdmissionForm from "./components/AdmissionForm";
import AdminAdmissionsView from "./components/AdminAdmissionsView";
import AdminDashboard from "./components/AdminDashboard";
import Events from "./components/Events";
import Academics from "./components/Academics";
import StudentDashboard from "./components/StudentDashboard";
import TeacherDashboard from "./components/TeacherDashboard";
import Layout from "./components/Layout";
import Homepage from "./components/Homepage";

function App() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={setUser} />} />

        <Route
          path="/"
          element={
            <Layout user={user} onLogout={setUser}>
              <Homepage />
            </Layout>
          }
        />

        <Route
          path="/admissions"
          element={
            <Layout user={user} onLogout={setUser}>
              <AdmissionForm />
            </Layout>
          }
        />
        <Route
          path="/events"
          element={
            <Layout user={user} onLogout={setUser}>
              <Events />
            </Layout>
          }
        />
        <Route
          path="/academics"
          element={
            <Layout user={user} onLogout={setUser}>
              <Academics />
            </Layout>
          }
        />

        <Route
          path="/admin"
          element={
            user?.role === "admin" ? (
              <Layout user={user} onLogout={setUser}>
                <AdminAdmissionsView />
                <AdminDashboard />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/teacher"
          element={
            user?.role === "teacher" ? (
              <Layout user={user} onLogout={setUser}>
                <TeacherDashboard />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/student"
          element={
            user?.role === "student" ? (
              <Layout user={user} onLogout={setUser}>
                <StudentDashboard username={user.username} />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="*"
          element={
            <Layout user={user} onLogout={setUser}>
              <h2>Page Not Found</h2>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
