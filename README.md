<h1 align="center">📚 School Management API</h1>

<p align="center">
🚀 Live Backend API built using <b>Node.js</b>, <b>Express.js</b>, and <b>MySQL</b>
</p>

<p align="center">
🌐 <b>Live API:</b> 
<a href="https://school-api-9sjq.onrender.com/api/listSchools?latitude=28.6&longitude=77.2" target="_blank">
Click Here to Test
</a>
</p>

<hr/>

<h2> Overview</h2>
<p>
This project provides REST APIs to manage school data.  
Users can:
</p>

<ul>
  <li>➕ Add new schools</li>
  <li>📍 Fetch schools sorted by distance from user location</li>
</ul>

<hr/>

<h2>🚀 Tech Stack</h2>
<ul>
  <li>⚡ Node.js</li>
  <li>🚀 Express.js</li>
  <li>🗄️ MySQL (Railway)</li>
  <li>🔐 dotenv</li>
  <li>📦 mysql2</li>
</ul>

<hr/>

<h2>📁 Project Structure</h2>

<pre>
school-api/

src/
 ├── config/
 │    └── db.js
 ├── controllers/
 │    └── schoolController.js
 ├── routes/
 │    └── schoolRoutes.js
 ├── utils/
 │    └── distance.js
 └── app.js

.env
package.json
README.md
</pre>

<hr/>

<h2>🗄️ Database Setup</h2>

<pre>
CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  address VARCHAR(255),
  latitude FLOAT,
  longitude FLOAT
);
</pre>

<hr/>

<h2>⚙️ Run Locally</h2>

<pre>
npm install
node src/app.js
</pre>

<p>Server runs on: <b>http://localhost:5000</b></p>

<hr/>

<h2>📌 API Endpoints</h2>

<h3>➕ Add School</h3>

<p><b>POST</b></p>

<p>
<a href="https://school-api-9sjq.onrender.com/api/addSchool" target="_blank">
https://school-api-9sjq.onrender.com/api/addSchool
</a>
</p>

<pre>
{
  "name": "ABC School",
  "address": "Delhi",
  "latitude": 28.7041,
  "longitude": 77.1025
}
</pre>

<p>✔ Validates input<br/>
✔ Stores data in database</p>

---

<h3>📍 List Schools (Sorted by Distance)</h3>

<p><b>GET</b></p>

<p>
<a href="https://school-api-9sjq.onrender.com/api/listSchools?latitude=28.6&longitude=77.2" target="_blank">
https://school-api-9sjq.onrender.com/api/listSchools?latitude=28.6&longitude=77.2
</a>
</p>

<p>
✔ Fetches all schools<br/>
✔ Calculates distance<br/>
✔ Returns nearest schools first
</p>

<hr/>

<h2>📏 Distance Calculation</h2>

<p>
This project uses the <b>Haversine Formula</b> to calculate accurate distance between two geographical coordinates.
</p>

<hr/>

<h2>🧪 Testing</h2>
<ul>
  <li>📮 Postman</li>
  <li>⚡ Thunder Client</li>
</ul>

<hr/>

<h2>🌐 Deployment</h2>
<ul>
  <li>🚀 Backend: Render</li>
  <li>🗄️ Database: Railway</li>
</ul>

<hr/>

<h2>📦 Deliverables</h2>
<ul>
  <li>✅ GitHub Repository</li>
  <li>✅ Live API</li>
  <li>✅ Postman Collection</li>
</ul>

<hr/>

<h2>🙌 Final Note</h2>

<p>
This project demonstrates real-world backend development including API design, database integration, and deployment.
</p>

<p align="center">
🔥 Built with dedication & learning mindset
</p>
