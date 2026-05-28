import { API } from "../services/api";

import { router, useLocalSearchParams } from "expo-router";

import { useEffect, useState } from "react";

import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const images: any = {
  othellos: require("../assets/shows/othellos.jpg"),
  bacon: require("../assets/shows/bacon.jpg"),
  romeos: require("../assets/shows/romeos-ioulieta.png"),
};

export default function ShowDetailsScreen() {
  const {
    show_id,
    title,
    image,
    description,
    duration,
    age_rating,
    theatre_name,
  } = useLocalSearchParams();

  const [showtimes, setShowtimes] = useState<any[]>([]);

  useEffect(() => {
    fetchShowtimes();
  }, []);

  const fetchShowtimes = async () => {
    try {
      const response = await API.get(`/showtimes/${show_id}`);

      setShowtimes(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={images[image as string]}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          {title}
        </Text>

        <Text style={styles.theatre}>
          {theatre_name}
        </Text>

        <Text style={styles.description}>
          {description}
        </Text>

        <Text style={styles.meta}>
          Duration: {duration} min · Age: {age_rating}
        </Text>

        <Text style={styles.info}>
          Available Showtimes
        </Text>

        {showtimes.map((item) => (
          <Pressable
            key={item.showtime_id}
            style={styles.showtimeButton}
            onPress={() =>
              router.push({
                pathname: "/seat-selection",
                params: {
                  showtime_id: item.showtime_id,
                  start_time: item.start_time,
                  price: item.price,
                },
              } as any)
            }
          >
            <Text style={styles.showtimeText}>
              {new Date(
                item.start_time
              ).toLocaleString()}
            </Text>

            <Text style={styles.price}>
              €{item.price}
            </Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
  },

  image: {
    width: "100%",
    height: 230,
    backgroundColor: "#020617",
  },

  content: {
    padding: 24,
  },

  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 8,
  },

  theatre: {
    color: "#2563eb",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 14,
  },

  description: {
    color: "#cbd5e1",
    fontSize: 16,
    lineHeight: 25,
    marginBottom: 18,
  },

  meta: {
    color: "#94a3b8",
    fontSize: 15,
    marginBottom: 26,
  },

  info: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },

  showtimeButton: {
    backgroundColor: "#2563eb",
    padding: 18,
    borderRadius: 18,
    marginBottom: 14,
  },

  showtimeText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 4,
  },

  price: {
    color: "#dbeafe",
    fontSize: 15,
  },
});