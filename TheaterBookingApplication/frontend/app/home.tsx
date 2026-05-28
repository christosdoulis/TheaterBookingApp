import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { API } from "../services/api";

const { width } = Dimensions.get("window");

const showImages: any = {
  othellos: require("../assets/shows/othellos.png"),
  bacon: require("../assets/shows/bacon.png"),
  romeos: require("../assets/shows/romeos-ioulieta.png"),
};

const showVerticalImages: any = {
  othellos: require("../assets/shows/othellos_katheta.png"),
  romeos: require("../assets/shows/romeos-ioulieta_katheta.png"),
};

const THEATRES = [
  {
    id: 1,
    name: "Εθνικό Θέατρο",
    imageName: "ethniko",
    image: require("../assets/theatres/ethniko.jpg"),
  },
  {
    id: 2,
    name: "Βασιλικό Θέατρο",
    imageName: "vasiliko",
    image: require("../assets/theatres/vasiliko.jpg"),
  },
  {
    id: 3,
    name: "Μέγαρο Μουσικής",
    imageName: "megaro",
    image: require("../assets/theatres/megaro.jpg"),
  },
];

export default function HomeScreen() {
  const [shows, setShows] = useState<any[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await API.get("/shows");
        setShows(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchShows();
  }, []);

  useEffect(() => {
    if (shows.length === 0) return;

    const interval = setInterval(() => {
      const nextIndex =
        activeIndex === shows.length - 1 ? 0 : activeIndex + 1;

      flatListRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });

      setActiveIndex(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, shows]);

  const openShow = (show: any) => {
    router.push({
      pathname: "/show-details",
      params: {
        show_id: show.id,
        title: show.title,
        image: show.image_name,
        description: show.description,
        duration: show.duration,
        age_rating: show.age_rating,
        theatre_name: show.theatre_name,
      },
    } as any);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.topBar}>
        <View>
          <Text style={styles.logoSmall}>CHRIS</Text>
          <Text style={styles.logoBig}>THEATRE</Text>
        </View>

        <Pressable
          style={styles.userButton}
          onPress={() => router.push("/profile" as any)}
        >
          <Ionicons
            name="person-circle-outline"
            size={36}
            color="white"
          />
        </Pressable>
      </View>

      <FlatList
        ref={flatListRef}
        data={shows}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(
            event.nativeEvent.contentOffset.x / width
          );
          setActiveIndex(index);
        }}
        renderItem={({ item }) => (
          <Pressable style={styles.bannerContainer} onPress={() => openShow(item)}>
            <Image
              source={showImages[item.image_name]}
              style={styles.bannerImage}
            />
          </Pressable>
        )}
      />

      <View style={styles.dotsContainer}>
        {shows.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, activeIndex === index && styles.activeDot]}
          />
        ))}
      </View>

      <View style={styles.section}>
        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>Παραστάσεις</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {shows.map((show) => (
            <Pressable
              key={show.id}
              style={styles.smallCard}
              onPress={() => openShow(show)}
            >
              <Image
                source={showVerticalImages[show.image_name] || showImages[show.image_name]}
                style={styles.smallImage}
              />
            </Pressable>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>Θέατρα</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {THEATRES.map((theatre) => (
            <Pressable
              key={theatre.id}
              style={styles.smallCard}
              onPress={() =>
                router.push({
                  pathname: "/theatre-details",
                  params: {
                    theatre: theatre.imageName,
                  },
                } as any)
              }
            >
              <Image source={theatre.image} style={styles.smallImage} />
              <Text style={styles.smallTitle}>{theatre.name}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
    paddingTop: 5,
  },

  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 18,
  },

  logoSmall: {
    color: "white",
    fontSize: 20,
    fontWeight: "900",
    letterSpacing: 1,
  },

  logoBig: {
    color: "#2563eb",
    fontSize: 26,
    fontWeight: "900",
    letterSpacing: 1,
  },

  userButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#0f172a",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#1e293b",
  },

  bannerContainer: {
    width,
    alignItems: "center",
  },

  bannerImage: {
    width: width - 30,
    height: 240,
    borderRadius: 24,
  },

  overlay: {
    position: "absolute",
    bottom: 22,
    left: 30,
  },

  bannerTitle: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },

  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 24,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 20,
    backgroundColor: "#475569",
    marginHorizontal: 5,
  },

  activeDot: {
    width: 24,
    backgroundColor: "white",
  },

  section: {
    marginBottom: 28,
    paddingLeft: 16,
  },

  sectionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 18,
    marginBottom: 14,
  },

  sectionTitle: {
    color: "white",
    fontSize: 23,
    fontWeight: "bold",
  },

  viewAll: {
    color: "#2563eb",
    fontWeight: "600",
  },

  smallCard: {
    marginRight: 14,
    width: 145,
  },

  smallImage: {
    width: 145,
    height: 190,
    borderRadius: 18,
  },

  smallTitle: {
    color: "white",
    marginTop: 10,
    fontSize: 15,
    fontWeight: "600",
  },
});