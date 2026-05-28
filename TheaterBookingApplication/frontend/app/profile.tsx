import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { API } from "../services/api";

export default function ProfileScreen() {
  const [reservations, setReservations] = useState<any[]>([]);

  const fetchReservations = async () => {
    try {
      const userId = await SecureStore.getItemAsync("user_id");

      const response = await API.get(
        `/reservations/user/${userId}`
      );

      setReservations(
        Array.isArray(response.data) ? response.data : []
      );
    } catch (error) {
      console.log(error);
    }
  };

  const cancelReservation = async (reservationId: number) => {
    try {
      await API.delete(`/reservations/${reservationId}`);

      Alert.alert(
        "Cancelled",
        "Reservation cancelled successfully"
      );

      fetchReservations();
    } catch (error) {
      Alert.alert(
        "Error",
        "Could not cancel reservation"
      );
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>My Profile</Text>

      <View style={styles.profileCard}>
        <Text style={styles.subtitle}>
          My Reservations
        </Text>
      </View>

      {reservations.length === 0 ? (
        <Text style={styles.empty}>
          No reservations yet.
        </Text>
      ) : (
        reservations.map((item) => (
          <View
            key={item.reservation_id}
            style={styles.card}
          >
            <Text style={styles.showTitle}>
              {item.title}
            </Text>

            <Text style={styles.info}>
              {item.theatre_name}
            </Text>

            <Text style={styles.info}>
              Seat: {item.seat_number}
            </Text>

            <Text style={styles.info}>
              {new Date(item.start_time).toLocaleString()}
            </Text>

            <Text style={styles.price}>
              €{item.price}
            </Text>

            <Pressable
              style={styles.cancelButton}
              onPress={() =>
                cancelReservation(item.reservation_id)
              }
            >
              <Text style={styles.cancelText}>
                Cancel Reservation
              </Text>
            </Pressable>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
    padding: 24,
    paddingTop: 50,
  },

  title: {
    color: "white",
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 20,
  },

  profileCard: {
    backgroundColor: "#0f172a",
    padding: 22,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#1e293b",
    marginBottom: 26,
  },

  subtitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },

  empty: {
    color: "#94a3b8",
    fontSize: 16,
    textAlign: "center",
    marginTop: 40,
  },

  card: {
    backgroundColor: "#0f172a",
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#1e293b",
    marginBottom: 16,
  },

  showTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },

  info: {
    color: "#cbd5e1",
    fontSize: 15,
    marginBottom: 6,
  },

  price: {
    color: "#22c55e",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 4,
    marginBottom: 14,
  },

  cancelButton: {
    backgroundColor: "#dc2626",
    padding: 14,
    borderRadius: 14,
    alignItems: "center",
  },

  cancelText: {
    color: "white",
    fontWeight: "bold",
  },
});