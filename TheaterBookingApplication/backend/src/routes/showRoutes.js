const express = require("express");
const pool = require("../config/db");

const router = express.Router();

router.get("/shows", async (req, res) => {
  let conn;

  try {
    conn = await pool.getConnection();

    const rows = await conn.query(`
    SELECT
      s.show_id AS id,
      s.title,
      s.description,
      s.duration,
      s.age_rating,
      s.image_name,
      t.name AS theatre_name
    FROM shows s
    JOIN theatres t
    ON s.theatre_id = t.theatre_id
  `);

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