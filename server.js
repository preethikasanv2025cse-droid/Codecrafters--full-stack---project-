const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const events = [
  { id: 1, name: "Web Development Workshop", date: "2025-02-10" },
  { id: 2, name: "Python Bootcamp", date: "2025-02-12" },
  { id: 3, name: "AI & Machine Learning Seminar", date: "2025-02-15" },
  { id: 4, name: "Cyber Security Awareness", date: "2025-02-18" },
  { id: 5, name: "Robotics & Automation Lab", date: "2025-02-20" },
  { id: 6, name: "Data Science Hands-on Workshop", date: "2025-02-22" },
  { id: 7, name: "UI/UX Design Workshop", date: "2025-02-25" }
];

app.get("/events", (req, res) => {
  res.json(events);
});

app.listen(3000, () => console.log("✅ Server running at http://localhost:3000"));