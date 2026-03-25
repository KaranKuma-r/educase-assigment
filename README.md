# educase-assigment
School Management API

Hi 👋
This is a backend project built using Node.js, Express.js, and MySQL.

The goal of this project is to:

* Add new schools
* Fetch schools sorted by distance from user location

---

TECH STACK

* Node.js
* Express.js
* MySQL
* dotenv
* mysql2

---

PROJECT STRUCTURE

school-api/

│
├── src/
│   ├── config/
│   │   └── db.js → Database connection
│
│   ├── controllers/
│   │   └── schoolController.js → API logic
│
│   ├── routes/
│   │   └── schoolRoutes.js → API routes
│
│   ├── utils/
│   │   └── distance.js → Distance calculation logic
│
│   └── app.js → Main server file
│
├── .env → Environment variables
├── package.json
├── README.md

---

DATABASE SETUP

Run this in MySQL:

CREATE DATABASE school_db;

USE school_db;

CREATE TABLE schools (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255),
address VARCHAR(255),
latitude FLOAT,
longitude FLOAT
);

---

ENV FILE (.env)

PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=school_db

---

RUN PROJECT

npm install
npx nodemon src/app.js

Server will run on:
http://localhost:5000

---

API ENDPOINTS

1. Add School

POST /api/addSchool

Body:
{
"name": "ABC School",
"address": "Delhi",
"latitude": 28.7041,
"longitude": 77.1025
}

Function:

* Validates input
* Stores data in database

---

2. List Schools

GET /api/listSchools?latitude=28.6&longitude=77.2

Function:

* Fetches all schools
* Calculates distance using Haversine formula
* Sorts nearest to farthest

---

DISTANCE LOGIC

Haversine formula is used to calculate distance between two coordinates.
This helps in showing nearest schools first.

---

TESTING

Use:

* Postman
* Thunder Client

---

DEPLOYMENT

* Backend: Render
* Database: Railway

---

DELIVERABLES

* GitHub repository
* Live API link
* Postman collection

---

WHAT I LEARNED

* Building REST APIs using Node.js
* Connecting MySQL with backend
* Handling validation and errors
* Implementing distance-based sorting
* Writing clean backend structure

---

FINAL NOTE

This project demonstrates a complete backend workflow including API development, database integration, and real-world logic implementation.
