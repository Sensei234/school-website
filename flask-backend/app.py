# flask-backend/app.py
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return {"message": "School Website Backend Running"}



import json
import os
from flask import request, jsonify

ADMISSION_FILE = "admissions.json"

def load_admissions():
    if os.path.exists(ADMISSION_FILE):
        with open(ADMISSION_FILE, "r") as f:
            return json.load(f)
    return []

def save_admissions(data):
    with open(ADMISSION_FILE, "w") as f:
        json.dump(data, f, indent=2)


@app.route("/api/admissions", methods=["POST"])
def submit_admission():
    form = request.json
    if not form.get("fullName") or not form.get("email"):
        return jsonify({"error": "Missing required fields"}), 400

    admissions = load_admissions()
    admissions.append(form)
    save_admissions(admissions)
    return jsonify({"message": "Admission submitted"}), 200


@app.route("/api/admissions", methods=["GET"])
def get_admissions():
    return jsonify(load_admissions())

@app.route("/api/login", methods=["POST"])
def login():
    creds = request.json
    username = creds.get("username")
    password = creds.get("password")

    if not username or not password:
        return jsonify({"error": "Missing credentials"}), 400

    with open("users.json", "r") as f:
        users = json.load(f)

    for user in users:
        if user["username"] == username and user["password"] == password:
            return jsonify({"message": "Login successful", "role": user["role"]})

    return jsonify({"error": "Invalid username or password"}), 401

@app.route("/api/marks/<username>", methods=["GET"])
def get_marks(username):
    if not os.path.exists("marks.json"):
        return jsonify([])

    with open("marks.json", "r") as f:
        all_marks = json.load(f)

    user_marks = [m for m in all_marks if m["username"] == username]
    return jsonify(user_marks)

@app.route("/api/events", methods=["GET"])
def get_events():
    if not os.path.exists("events.json"):
        return jsonify([])
    with open("events.json", "r") as f:
        return jsonify(json.load(f))

@app.route("/api/academics", methods=["GET"])
def get_academics():
    if not os.path.exists("academics.json"):
        return jsonify({})
    with open("academics.json", "r") as f:
        return jsonify(json.load(f))

@app.route("/api/marks", methods=["POST"])
def save_marks():
    new_mark = request.json
    if not new_mark.get("username") or not new_mark.get("subject") or new_mark.get("marks") is None:
        return jsonify({"error": "Missing fields"}), 400

    marks = []
    if os.path.exists("marks.json"):
        with open("marks.json", "r") as f:
            marks = json.load(f)

    # Remove old entry if exists (by username+subject)
    marks = [m for m in marks if not (m["username"] == new_mark["username"] and m["subject"] == new_mark["subject"])]
    marks.append(new_mark)

    with open("marks.json", "w") as f:
        json.dump(marks, f, indent=2)

    return jsonify({"message": "Mark saved successfully"}), 200

from collections import defaultdict

@app.route("/api/marks/summary", methods=["GET"])
def get_marks_summary():
    if not os.path.exists("marks.json"):
        return jsonify({"subjects": {}})

    with open("marks.json", "r") as f:
        marks = json.load(f)

    subject_summary = defaultdict(list)
    for entry in marks:
        subject_summary[entry["subject"]].append(entry["marks"])

    summary = {
        subject: {
            "average": round(sum(scores)/len(scores), 2),
            "highest": max(scores),
            "lowest": min(scores),
            "count": len(scores)
        }
        for subject, scores in subject_summary.items()
    }

    return jsonify({"subjects": summary})


if __name__ == "__main__":
    app.run(debug=True)