const express = require("express");
const pool = require("../config/db");

const router = express.Router();

router.post("/", async (req, res) => {
  let conn;

  try {
    const { user_id, showtime_id, seat_ids } = req.body;

    conn = await pool.getConnection();

    for (const seat_id of seat_ids) {
      await conn.query(
        "INSERT INTO reservations (user_id, showtime_id, seat_id) VALUES (?, ?, ?)",
        [user_id, showtime_id, seat_id]
      );
    }

    res.json({
      message: "Reservation completed",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Reservation failed",
    });
  } finally {
    if (conn) conn.release();
  }
});

module.exports = router;

router.get("/user/:userId", async (req, res) => {
  let conn;

  try {
    const { userId } = req.params;

    conn = await pool.getConnection();

    const rows = await conn.query(
      `
      SELECT
        r.reservation_id,
        r.created_at,
        s.title,
        st.start_time,
        st.price,
        seats.seat_number,
        t.name AS theatre_name
      FROM reservations r
      JOIN showtimes st ON r.showtime_id = st.showtime_id
      JOIN shows s ON st.show_id = s.show_id
      JOIN theatres t ON s.theatre_id = t.theatre_id
      JOIN seats ON r.seat_id = seats.seat_id
      WHERE r.user_id = ?
      ORDER BY st.start_time DESC
      `,
      [userId]
    );

    res.json(rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  } finally {
    if (conn) conn.release();
  }
});

router.delete("/:reservationId", async (req, res) => {
  let conn;

  try {
    const { reservationId } = req.params;

    conn = await pool.getConnection();

    await conn.query(
      "DELETE FROM reservations WHERE reservation_id = ?",
      [reservationId]
    );

    res.json({ message: "Reservation cancelled" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Cancel failed" });
  } finally {
    if (conn) conn.release();
  }
});