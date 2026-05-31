const express = require("express");
const pool = require("../config/db");

const router = express.Router();

router.get("/:showtimeId", async (req, res) => {
  let conn;

  try {
    const { showtimeId } = req.params;

    conn = await pool.getConnection();

    const rows = await conn.query(
      `
      SELECT
        seats.seat_id,
        seats.seat_number,
        CASE
          WHEN reservations.reservation_id IS NULL THEN 0
          ELSE 1
        END AS is_taken
      FROM seats
      JOIN shows ON seats.theatre_id = shows.theatre_id
      JOIN showtimes ON shows.show_id = showtimes.show_id
      LEFT JOIN reservations 
        ON reservations.seat_id = seats.seat_id
        AND reservations.showtime_id = showtimes.showtime_id
      WHERE showtimes.showtime_id = ?
      ORDER BY seats.seat_id ASC
      `,
      [showtimeId]
    );

    res.json(rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  } finally {
    if (conn) conn.release();
  }
});

module.exports = router;