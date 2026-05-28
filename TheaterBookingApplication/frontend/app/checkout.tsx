import { router, useLocalSearchParams } from "expo-router";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { API } from "../services/api";
import * as SecureStore from "expo-secure-store";

export default function CheckoutScreen() {
  const {
    showtime_id,
    start_time,
    price,
    seat_ids,
    seat_numbers,
  } = useLocalSearchParams();

  const seatIds = seat_ids
    ? JSON.parse(seat_ids as string)
    : [];

  const seatNumbers = seat_numbers
    ? JSON.parse(seat_numbers as string)
    : [];

  const total = seatIds.length * Number(price);

  const confirmBooking = async () => {
    try {
      const userId = await SecureStore.getItemAsync("user_id");
      const token = await SecureStore.getItemAsync("token");

      await API.post(
        "/reservations",
        {
          user_id: userId,
          showtime_id,
          seat_ids: seatIds,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      Alert.alert(
        "Reservation Completed",
        "Your seats have been booked successfully"
      );

      router.replace("/home" as any);
    } catch (error) {
      console.log(error);

      Alert.alert("Error", "Reservation failed");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Showtime</Text>

        <Text style={styles.value}>
          {new Date(start_time as string).toLocaleString()}
        </Text>

        <Text style={styles.label}>Seats</Text>

        <Text style={styles.value}>
          {seatNumbers.join(", ")}
        </Text>

        <Text style={styles.label}>Ticket Price</Text>

        <Text style={styles.value}>€{price}</Text>

        <Text style={styles.label}>Total</Text>

        <Text style={styles.total}>
          €{total.toFixed(2)}
        </Text>
      </View>

      <Pressable
        style={styles.payButton}
        onPress={confirmBooking}
      >
        <Text style={styles.payText}>
          Confirm Reservation
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
    padding: 24,
    paddingTop: 60,
  },

  title: {
    color: "white",
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 24,
  },

  card: {
    backgroundColor: "#0f172a",
    padding: 22,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#1e293b",
    marginBottom: 24,
  },

  label: {
    color: "#94a3b8",
    fontSize: 14,
    marginTop: 12,
  },

  value: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 4,
  },

  total: {
    color: "#22c55e",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 8,
  },

  payButton: {
    backgroundColor: "#2563eb",
    padding: 18,
    borderRadius: 18,
    alignItems: "center",
  },

  payText: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },
});