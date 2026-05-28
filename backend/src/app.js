require("dotenv").config();

const express = require("express");
const cors = require("cors");

const theatreRoutes = require("./routes/theatreRoutes");
const authRoutes = require("./routes/authRoutes");
const showRoutes = require("./routes/showRoutes");
const showtimeRoutes = require("./routes/showtimeRoutes");
const seatRoutes = require("./routes/seatRoutes");
const reservationRoutes = require("./routes/reservationRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(authRoutes);
app.use(theatreRoutes);
app.use(showRoutes);
app.use("/showtimes", showtimeRoutes);
app.use("/seats", seatRoutes);
app.use("/reservations", reservationRoutes);

app.get("/", (req, res) => {
  res.send("API Running");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});