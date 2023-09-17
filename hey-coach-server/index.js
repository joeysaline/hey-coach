const express = require("express");
const server = express();
const cors = require("cors");
const pool = require("./database");
const port = process.env.PORT || 5000;

server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.send("Welcome to hey-coach-server!");
});

/**
 *
 *
 * Users Table API
 *
 *
 */
// create a user
server.post("/users", async (req, res) => {
  try {
    const { email, name } = req.body;
    const user = await pool.query(
      "INSERT INTO users (email, name) VALUES ($1, $2) RETURNING *",
      [email, name]
    );
    res.json(user.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});
// read all users
server.get("/users", async (req, res) => {
  try {
    const users = await pool.query("SELECT * FROM users");
    console.log(users.rows);
    res.json(users.rows);
  } catch (error) {
    console.log(error.message);
  }
});
// read a user's name
server.get("/users/getName", async (req, res) => {
  try {
    const { email } = req.body;
    const name = await pool.query("SELECT name FROM users WHERE email = $1", [
      email,
    ]);
    console.log(name.rows[0]);
    res.json(name.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});
/**
 *
 *
 *  Activities Table API
 *
 *
 */
// create an activity for a user
server.post("/activities/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const { title } = req.body;
    const activity = await pool.query(
      "INSERT INTO activities (title, email) VALUES ($1, $2) RETURNING *",
      [title, email]
    );
    res.json(activity.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});
// read all activities for a user
server.get("/activities", async (req, res) => {
  try {
    const { email } = req.body;
    const name = await pool.query("SELECT * FROM activities WHERE email = $1", [
      email,
    ]);
    res.json(name.rows);
  } catch (error) {
    console.log(error.message);
  }
});
// read an individual activity
server.get("/activities/getIndividual", async (req, res) => {
  try {
    const { id } = req.body;
    const name = await pool.query("SELECT * FROM activities WHERE activity_id = $1", [
      id,
    ]);
    res.json(name.rows);
  } catch (error) {
    console.log(error.message);
  }
});
// update an activity
server.put("/activities", async (req, res) => {
  try {
    const { id, title } = req.body;
    const update = await pool.query(
      "UPDATE activities SET title = $1 WHERE activity_id = $2",
      [title, id]
    );
    res.json("Activity updated!");
  } catch (error) {
    console.log(error.message);
  }
});
// delete an activity
server.delete("/activities", async (req, res) => {
  try {
    const { id } = req.body;
    const name = await pool.query(
      "DELETE FROM activities WHERE activity_id = $1",
      [id]
    );
    res.json("Activity deleted!");
  } catch (error) {
    console.log(error.message);
  }
});
/**
 *
 *
 *  SERVER CONNECTION
 *
 */
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
