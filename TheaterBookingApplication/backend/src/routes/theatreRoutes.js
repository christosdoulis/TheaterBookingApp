const express = require("express");
const pool = require("../config/db");

const router = express.Router();

router.get("/theatres", async (req, res) => {
  let conn;

  try {
    conn = await pool.getConnection();

    const rows = await conn.query(
      "SELECT theatre_id AS id, name, location, description FROM theatres"
    );

    res.json(rows);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Database error",
    });
  } finally {
    if (conn) conn.release();
  }
});

module.exports = router;