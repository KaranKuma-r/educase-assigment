<h1 align="center">📚 School Management API</h1>

<p align="center">
Backend project built using <b>Node.js</b>, <b>Express.js</b>, and <b>MySQL</b>
</p>

<hr/>

<h2>📌 Overview</h2>
<p>
This project provides APIs to manage school data.
Users can add new schools and fetch schools sorted by distance from their location.
</p>

<hr/>

<h2>🚀 Tech Stack</h2>
<ul>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>MySQL</li>
  <li>dotenv</li>
  <li>mysql2</li>
</ul>

<hr/>

<h2>📁 Project Structure</h2>

<pre>
school-api/

src/
 ├── config/
 │    └── db.js  → Database connection
 ├── controllers/
 │    └── schoolController.js  → API logic
 ├── routes/
 │    └── schoolRoutes.js  → API routes
 ├── utils/
 │    └── distance.js  → Distance calculation
 └── app.js  → Main server

.env  → Environment variables
package.json
README.md
</pre>

<hr/>

<h2>🗄️ Database Setup</h2>

<pre>
CREATE DATABASE school_db;

CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  address VARCHAR(255),
  latitude FLOAT,
  longitude FLOAT
);
</pre>

<hr/>

<h2>⚙️ Run Project</h2>

<pre>
npm install
npx nodemon src/app.js

<p>Server runs on: http://localhost:5000</p>

<hr/>

<h2>📌 API Endpoints</h2>

<h3>1. Add School</h3>
<p><b>POST</b> /api/addSchool</p>

<pre>
{
  "name": "ABC School",
  "address": "Delhi",
  "latitude": 28.7041,
  "longitude": 77.1025
}
</pre>

<p>
✔ Validates input <br/>
✔ Stores data in database
</p>

---

<h3>2. List Schools</h3>
<p><b>GET</b> /api/listSchools?latitude=28.6&longitude=77.2</p>

<p>
✔ Fetches all schools <br/>
✔ Calculates distance <br/>
✔ Sorts nearest to farthest
</p>

<hr/>

<h2>📏 Distance Logic</h2>
<p>
Distance is calculated using the <b>Haversine formula</b> to find accurate distance between coordinates.
</p>

<hr/>

<h2>🧪 Testing</h2>
<ul>
  <li>Postman</li>
  <li>Thunder Client</li>
</ul>

<hr/>

<h2>🌐 Deployment</h2>
<ul>
  <li>Backend: Render</li>
  <li>Database: Railway</li>
</ul>

<hr/>

<h2>📦 Deliverables</h2>
<ul>
  <li>Source Code (GitHub)</li>
  <li>Live API</li>
  <li>Postman Collection</li>
</ul>

<hr/>

<h2>🙌 Final Note</h2>
<p>
This project demonstrates API development, database integration, and real-world distance-based sorting.
</p>
