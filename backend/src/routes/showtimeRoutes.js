const express = require("express");
const pool = require("../config/db");

const router = express.Router();

router.get("/:showId", async (req, res) => {
  let conn;

  try {
    const { showId } = req.params;

    conn = await pool.getConnection();

    const rows = await conn.query(
      `
      SELECT
        st.showtime_id,
        st.show_id,
        st.start_time,
        st.price,
        s.title,
        t.name AS theatre_name
      FROM showtimes st
      JOIN shows s ON st.show_id = s.show_id
      JOIN theatres t ON s.theatre_id = t.theatre_id
      WHERE st.show_id = ?
      ORDER BY st.start_time ASC
      `,
      [showId]
    );

    res.json(rows);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server error",
    });
  } finally {
    if (conn) conn.release();
  }
});

module.exports = router;