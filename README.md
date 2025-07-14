
School Website — Fullstack Application
======================================

A full-fledged school portal developed using React for the frontend and Flask for the backend. The application supports role-based access control for Admins, Teachers, and Students, and includes modules for admissions, academics, events, marks management, and performance analytics.

Features
--------

**Authentication & Role Management**
- Secure login system with Admin, Teacher, and Student roles
- Session persistence using localStorage
- Logout and route protection

**Admissions Module**
- Public-facing admission form
- Admin view of all submitted applications
- JSON-based data storage

**Academics Section**
- Displays curriculum by class
- Faculty list with subjects and experience

**Events Section**
- Event display cards with title, description, and images

**Teacher Dashboard**
- Submit student marks per subject
- Marks update if already entered

**Student Dashboard**
- View personal academic performance
- Access restricted to logged-in student

**Admin Dashboard**
- View subject-wise analytics (average, high, low)
- Admissions summary table

**Navigation & UI**
- Page-based routing with React Router
- Role-based navigation bar
- Back and Logout controls
- Clean, responsive interface

Tech Stack
----------

Frontend: React, React Router  
Backend: Flask (Python)  
Styling: Custom CSS (inline)  
Storage: JSON files (local file-based storage)

Project Structure
-----------------

SchoolWebsite/  
├── flask-backend/  
│   ├── app.py               → Flask API server  
│   ├── admissions.json      → Admission form data  
│   ├── marks.json           → Student marks  
│   └── users.json           → User login credentials  
│
├── react-frontend/  
│   ├── src/  
│   │   ├── components/      → React UI components  
│   │   └── App.js           → Frontend routing and logic  
│   └── public/  
│
└── README.txt

Getting Started
---------------

**Backend (Flask)**

cd flask-backend  
python -m venv venv  
venv\Scripts\activate    (for Windows)  
pip install flask flask-cors  
python app.py

**Frontend (React)**

cd react-frontend  
npm install  
npm start  

The application will be available at http://localhost:3000

Demo Login Credentials
----------------------

Admin:     Username - admin     | Password - admin123  
Teacher:   Username - teacher1  | Password - teacher123  
Student:   Username - student1  | Password - student123  

License
-------

This project is licensed under the MIT License. You are free to use, distribute, and modify the code as needed.
