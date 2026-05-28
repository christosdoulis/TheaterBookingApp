import { useLocalSearchParams } from "expo-router";

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const theatres: any = {
  ethniko: {
    title: "Εθνικό Θέατρο",
    image: require("../assets/theatres/ethniko.jpg"),
    address: "Αγίου Κωνσταντίνου 22, Αθήνα",
    description:
      "Το Εθνικό Θέατρο αποτελεί έναν από τους σημαντικότερους πολιτιστικούς οργανισμούς της Ελλάδας.",
  },

  vasiliko: {
    title: "Βασιλικό Θέατρο",
    image: require("../assets/theatres/vasiliko.jpg"),
    address: "Θεσσαλονίκη",
    description:
      "Το Βασιλικό Θέατρο φιλοξενεί μεγάλες θεατρικές παραγωγές στη Θεσσαλονίκη.",
  },

  megaro: {
    title: "Μέγαρο Μουσικής",
    image: require("../assets/theatres/megaro.jpg"),
    address: "Λεωφόρος Βασιλίσσης Σοφίας, Αθήνα",
    description:
      "Το Μέγαρο Μουσικής Αθηνών είναι κέντρο πολιτισμού και παραστάσεων υψηλού επιπέδου.",
  },
};

export default function TheatreDetailsScreen() {
  const { theatre } = useLocalSearchParams();

  const selected =
    theatres[theatre as string];

  return (
    <ScrollView style={styles.container}>
      <Image
        source={selected.image}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          {selected.title}
        </Text>

        <Text style={styles.address}>
          {selected.address}
        </Text>

        <Text style={styles.description}>
          {selected.description}
        </Text>
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
    height: 320,
  },

  content: {
    padding: 24,
  },

  title: {
    color: "white",
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 12,
  },

  address: {
    color: "#2563eb",
    fontSize: 18,
    marginBottom: 22,
  },

  description: {
    color: "#cbd5e1",
    fontSize: 17,
    lineHeight: 28,
  },
});