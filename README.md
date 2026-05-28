# Installation Guide

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/TheaterBookingApplication.git
```

---

# Backend Setup

## Navigate to backend folder

```bash
cd backend
```

## Install dependencies

```bash
npm install
```

## Create .env file

Create a `.env` file inside the backend folder and add:

```env
PORT=3000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=theatre_booking

JWT_SECRET=theatre_booking_secret_2026
```

## Start backend server

```bash
node src/app.js
```

---

# Frontend Setup

## Navigate to frontend folder

```bash
cd frontend
```

## Install dependencies

```bash
npm install
```

## Start Expo application

```bash
npx expo start
```

---

# Database Setup

1. Open MariaDB or phpMyAdmin.
2. Create a database named:

```txt
theatre_booking
```

3. Import the SQL file from:

```txt
database/theatre_booking.sql
```
