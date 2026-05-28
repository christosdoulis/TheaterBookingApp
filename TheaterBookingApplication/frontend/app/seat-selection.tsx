import { API } from "../services/api";

import { useEffect, useState } from "react";

import { router, useLocalSearchParams } from "expo-router";

import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function SeatSelectionScreen() {
  const {
  showtime_id,
  start_time,
  price,
  } = useLocalSearchParams();

  const [seats, setSeats] = useState<any[]>([]);
  const [selectedSeats, setSelectedSeats] =
  useState<any[]>([]);

  useEffect(() => {
    fetchSeats();
  }, []);

  const fetchSeats = async () => {
    try {
      const response = await API.get(
        `/seats/${showtime_id}`
      );

      setSeats(
        Array.isArray(response.data)
          ? response.data
          : []
      );
    } catch (error) {
      console.log(error);
    }
  };

  const selectSeat = (seat: any) => {
    if (seat.is_taken) {
      Alert.alert(
        "Unavailable",
        "This seat is already booked"
      );
      return;
    }

    const exists = selectedSeats.find(
      (s) => s.seat_id === seat.seat_id
    );

    if (exists) {
      setSelectedSeats(
        selectedSeats.filter(
          (s) => s.seat_id !== seat.seat_id
        )
      );
    } else {
      setSelectedSeats([
        ...selectedSeats,
        seat,
      ]);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Select Your Seat
      </Text>

      <View style={styles.screen}>
        <Text style={styles.screenText}>
          STAGE
        </Text>
      </View>

      <View style={styles.legend}>
        <View style={styles.legendItem}>
          <View
            style={[
              styles.legendBox,
              styles.availableSeat,
            ]}
          />

          <Text style={styles.legendText}>
            Available
          </Text>
        </View>

        <View style={styles.legendItem}>
          <View
            style={[
              styles.legendBox,
              styles.selectedSeat,
            ]}
          />

          <Text style={styles.legendText}>
            Selected
          </Text>
        </View>

        <View style={styles.legendItem}>
          <View
            style={[
              styles.legendBox,
              styles.takenSeat,
            ]}
          />

          <Text style={styles.legendText}>
            Occupied
          </Text>
        </View>
      </View>

      <View style={styles.seatGrid}>
        {seats.map((seat) => {
          const isSelected = selectedSeats.some(
            (s) => s.seat_id === seat.seat_id
          );

          return (
            <Pressable
              key={seat.seat_id}
              style={[
                styles.seat,
                seat.is_taken
                  ? styles.takenSeat
                  : styles.availableSeat,

                isSelected &&
                  styles.selectedSeat,
              ]}
              onPress={() => selectSeat(seat)}
            >
              <Text style={styles.seatText}>
                {seat.seat_number}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <View style={styles.footer}>
        <Text style={styles.selectedText}>
          {selectedSeats.length > 0
            ? `Selected Seats: ${selectedSeats
                .map((s) => s.seat_number)
                .join(", ")}`
            : "Choose seats"}
        </Text>

        <Pressable
          disabled={selectedSeats.length === 0}
          style={[
            styles.checkoutButton,
            selectedSeats.length === 0 &&
              styles.disabledButton,
          ]}
          onPress={() =>
            router.push({
              pathname: "/checkout",
              params: {
                showtime_id,
                start_time,
                price,
                seat_ids: JSON.stringify(
                  selectedSeats.map((s) => s.seat_id)
                ),
                seat_numbers: JSON.stringify(
                  selectedSeats.map((s) => s.seat_number)
                ),
              },
            } as any)
          }
        >
          <Text style={styles.checkoutText}>
            Continue to Checkout
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
    padding: 18,
  },

  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },

  screen: {
    backgroundColor: "#1e293b",
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 22,
  },

  screenText: {
    color: "#cbd5e1",
    fontWeight: "bold",
    letterSpacing: 5,
  },

  legend: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },

  legendItem: {
    flexDirection: "row",
    alignItems: "center",
  },

  legendBox: {
    width: 16,
    height: 16,
    borderRadius: 5,
    marginRight: 6,
  },

  legendText: {
    color: "#cbd5e1",
    fontSize: 12,
  },

  seatGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    columnGap: 6,
    rowGap: 8,
  },

  seat: {
    width: "8.5%",
    aspectRatio: 1,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },

  availableSeat: {
    backgroundColor: "#2563eb",
  },

  selectedSeat: {
    backgroundColor: "#22c55e",
  },

  takenSeat: {
    backgroundColor: "#64748b",
  },

  seatText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },

  footer: {
    marginTop: 0,
    marginBottom: 0,
  },

  selectedText: {
    color: "white",
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 14,
    textAlign: "center",
  },

  checkoutButton: {
    backgroundColor: "#2563eb",
    padding: 18,
    borderRadius: 18,
    alignItems: "center",
  },

  disabledButton: {
    backgroundColor: "#334155",
  },

  checkoutText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});