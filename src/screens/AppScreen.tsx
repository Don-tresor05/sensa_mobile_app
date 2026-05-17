import { ScrollView, View, Text, Pressable, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RootStackParamList } from "../navigation/AppNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "App">;

const options = [
  {
    id: "visual",
    title: "Not Seeing",
    subtitle: "Audio & Voice focus",
    icon: "eye-outline" as const,
  },
  {
    id: "vocal",
    title: "Not Speaking",
    subtitle: "Gesture & Text focus",
    icon: "mic-outline" as const,
  },
  {
    id: "auditory",
    title: "Not Hearing",
    subtitle: "Visual & Haptic focus",
    icon: "volume-high-outline" as const,
  },
  {
    id: "none",
    title: "Standard",
    subtitle: "Full multimodal access",
    icon: "person-outline" as const,
  },
] as const;

export default function AppScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <View style={[styles.header, { paddingTop: insets.top + 10 }]}>
        <Text style={styles.brand}>Sensa</Text>
        <View style={styles.nav}>
          <Pressable onPress={() => navigation.navigate("Landing")} hitSlop={8}>
            <Text style={styles.navItem}>LANDING</Text>
          </Pressable>
          <Text style={styles.navItemActive}>APP</Text>
          <View style={styles.navDivider} />
        </View>
      </View>

      <View style={styles.hero}>
        <View style={styles.heroCircle} />
        <Text style={styles.kicker}>BRIDGE SETUP • 1/2</Text>
        <View style={styles.heroTitleWrap}>
          <Text style={styles.heroTitle}>Define Person A</Text>
          <Text style={styles.heroTitle}>Define Person A</Text>
        </View>
        <Text style={styles.heroBody}>Select the primary interaction needs for the first participant.</Text>
      </View>

      <View style={styles.cards}>
        {options.map((option) => (
          <Pressable
            key={option.id}
            onPress={() => navigation.navigate("Communicate", { a: option.id, b: "none" })}
            style={styles.card}
          >
            <View style={styles.iconTile}>
              <Ionicons name={option.icon} size={23} color="#191919" />
            </View>
            <View style={styles.cardCopy}>
              <Text style={styles.cardTitle}>{option.title}</Text>
              <Text style={styles.cardSubtitle}>{option.subtitle}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fbf8ef",
  },
  content: {
    paddingBottom: 48,
  },
  header: {
    paddingHorizontal: 20,
    paddingBottom: 22,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "rgba(0,0,0,0.08)",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  brand: {
    fontSize: 22,
    fontWeight: "600",
    letterSpacing: -0.4,
    color: "#111111",
  },
  nav: {
    flexDirection: "row",
    alignItems: "center",
  },
  navItemActive: {
    marginRight: 34,
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 4,
    color: "rgba(0,0,0,0.55)",
  },
  navItem: {
    marginRight: 24,
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 4,
    color: "rgba(0,0,0,0.32)",
  },
  navDivider: {
    width: 1,
    height: 20,
    backgroundColor: "rgba(0,0,0,0.10)",
  },
  hero: {
    paddingHorizontal: 20,
    paddingTop: 22,
    position: "relative",
  },
  heroCircle: {
    position: "absolute",
    right: 25,
    top: 18,
    width: 114,
    height: 114,
    borderRadius: 999,
    backgroundColor: "#b1aba2",
  },
  kicker: {
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 4.2,
    color: "rgba(0,0,0,0.38)",
  },
  heroTitleWrap: {
    width: 190,
    marginTop: 12,
  },
  heroTitle: {
    fontSize: 53,
    lineHeight: 50,
    letterSpacing: -4.2,
    color: "#111111",
    fontWeight: "400",
  },
  heroBody: {
    marginTop: 20,
    width: 290,
    fontSize: 18,
    lineHeight: 28,
    color: "rgba(0,0,0,0.56)",
  },
  cards: {
    paddingHorizontal: 20,
    paddingTop: 34,
    gap: 16,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 24,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.07)",
    backgroundColor: "#fffdf7",
  },
  iconTile: {
    width: 54,
    height: 54,
    borderRadius: 8,
    backgroundColor: "#f7f1e1",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 18,
  },
  cardCopy: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#111111",
  },
  cardSubtitle: {
    marginTop: 8,
    fontSize: 14,
    color: "rgba(0,0,0,0.38)",
  },
});
