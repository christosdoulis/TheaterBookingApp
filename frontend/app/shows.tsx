import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { API } from "../services/api";

export default function ShowsScreen() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  const getShows = async () => {
    try {
      const response = await API.get("/shows");

      setShows(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getShows();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <FlatList
      data={shows}
      keyExtractor={(item: any) => item.id.toString()}
      contentContainerStyle={styles.list}
      renderItem={({ item }: any) => (
        <View style={styles.card}>
          <Text style={styles.title}>
            {item.title}
          </Text>

          <Text style={styles.theatre}>
            {item.theatre_name}
          </Text>

          <Text style={styles.description}>
            {item.description}
          </Text>

          <Text style={styles.info}>
            Duration: {item.duration} min
          </Text>

          <Text style={styles.info}>
            Age Rating: {item.age_rating}
          </Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  list: {
    padding: 16,
  },

  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    marginBottom: 16,
    elevation: 4,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },

  theatre: {
    color: "#2563eb",
    marginBottom: 8,
    fontWeight: "600",
  },

  description: {
    color: "#555",
    marginBottom: 12,
  },

  info: {
    color: "#222",
    marginBottom: 4,
  },
});