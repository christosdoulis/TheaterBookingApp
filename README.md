# Οδηγίες Εγκατάστασης


# Ρύθμιση Backend

## Μετάβαση στον φάκελο backend

```bash
cd backend
```

## Εγκατάσταση dependencies

```bash
npm install
```

## Δημιουργία αρχείου .env

Δημιουργήστε ένα αρχείο `.env` μέσα στον φάκελο backend και προσθέστε:

```env
PORT=3000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=theatre_booking

JWT_SECRET=your_jwt_secret
```

## Εκκίνηση backend server

```bash
npm run dev
```

---

# Ρύθμιση Frontend

## Μετάβαση στον φάκελο frontend

```bash
cd frontend
```

## Εγκατάσταση dependencies

```bash
npm install
```

## Εκκίνηση Expo εφαρμογής

```bash
npx expo start
```

---

# Ρύθμιση Βάσης Δεδομένων

1. Ανοίξτε MariaDB ή phpMyAdmin.
2. Δημιουργήστε μία βάση δεδομένων με όνομα:

```txt
theatre_booking
```

3. Κάντε import το αρχείο:

```txt
database/theatre_booking.sql
```
## Σύνδεση Frontend με Backend

Στο frontend, μέσα στο αρχείο:

```txt
services/api.ts
```

αλλάξτε το base URL με τη διεύθυνση IP του υπολογιστή που τρέχει το backend:

```js
const API = axios.create({
  baseURL: "http://YOUR_IP:3000",
});
```

Παράδειγμα:

```js
const API = axios.create({
  baseURL: "http://192.168.1.5:3000",
});
```

---

## Εύρεση IP Διεύθυνσης

Ανοίξτε terminal ή command prompt και εκτελέστε:

```bash
ipconfig
```

Βρείτε την IPv4 Address, π.χ.:

```txt
192.168.1.5
```

---

## Σημαντικό

Η κινητή συσκευή και ο υπολογιστής πρέπει να είναι συνδεδεμένοι στο ίδιο Wi-Fi δίκτυο.
