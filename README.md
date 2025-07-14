# School Website — Fullstack Application

This is a full-fledged school portal developed using React for the frontend and Flask for the backend. The application supports role-based access control for Admins, Teachers, and Students, and includes modules for admissions, academics, events, marks management, and performance analytics.

---

## Features

### Authentication & Role Management
- Secure login system with Admin, Teacher, and Student roles
- Session persistence using `localStorage`
- Logout and route protection

### Admissions Module
- Public-facing admission form
- Admin view of all submitted applications
- JSON-based storage for data persistence

### Academics Section
- Displays curriculum by class
- Faculty list with subjects and experience

### Events Section
- Event display cards with title, description, and images

### Teacher Dashboard
- Submit marks for students per subject
- Automatically updates or replaces existing records

### Student Dashboard
- View own academic marks
- Dashboard restricted to logged-in student

### Admin Dashboard
- Subject-wise performance analytics:
  - Average, highest, and lowest marks
- Admissions summary view

### Navigation & UI
- React Router for page-based navigation
- Shared layout across pages
- Integrated Back and Logout controls
- Clean, responsive UI

---

## Tech Stack

| Layer      | Technology            |
|------------|------------------------|
| Frontend   | React, React Router    |
| Backend    | Flask (Python)         |
| Styling    | Custom CSS (inline)    |
| Storage    | JSON-based persistence |

---

## Project Structure

