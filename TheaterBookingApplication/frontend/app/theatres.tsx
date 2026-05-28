import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { API } from "../services/api";

export default function TheatresScreen() {
  const [theatres, setTheatres] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTheatres = async () => {
    try {
      const response = await API.get("/theatres");

      setTheatres(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTheatres();
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
      data={theatres}
      keyExtractor={(item: any) => item.id.toString()}
      contentContainerStyle={styles.list}
      renderItem={({ item }: any) => (
        <View style={styles.card}>
          <Text style={styles.title}>
            {item.name}
          </Text>

          <Text style={styles.location}>
            {item.location}
          </Text>

          <Text style={styles.description}>
            {item.description}
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
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },

  location: {
    color: "#2563eb",
    marginBottom: 8,
  },

  description: {
    color: "#555",
  },
});