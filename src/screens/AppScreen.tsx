import { useState } from "react";
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RootStackParamList } from "../navigation/AppNavigator";
import { BottomNav, TopNav } from "../components/AppChrome";

type Props = NativeStackScreenProps<RootStackParamList, "App">;

const options = [
  { id: "visual", title: "Not Seeing", subtitle: "Audio & Voice focus", icon: "eye-off-outline" as const },
  { id: "vocal", title: "Not Speaking", subtitle: "Gesture & Text focus", icon: "mic-off-outline" as const },
  { id: "auditory", title: "Not Hearing", subtitle: "Visual & Haptic focus", icon: "volume-high-outline" as const },
  { id: "none", title: "Standard", subtitle: "Full multimodal access", icon: "person-outline" as const },
] as const;

type OptionId = (typeof options)[number]["id"];

export default function AppScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();
  const [selected, setSelected] = useState<OptionId>("visual");

  return (
    <View style={styles.phoneFrame}>
      <TopNav active="App" onPressLanding={() => navigation.navigate("Landing")} onPressApp={() => undefined} />
      <View style={styles.dividerLine} />

      <ScrollView style={styles.contentScroll} contentContainerStyle={{ paddingBottom: insets.bottom + 12 }} showsVerticalScrollIndicator={false}>
        <View style={styles.heroArea}>
          <View style={styles.avatar}>
            <View style={styles.avatarGrey} />
          </View>
          <Text style={styles.progressLabel}>Bridge Setup · 1/2</Text>
          <Text style={styles.pageTitle}>Define Person A</Text>
          <Text style={styles.pageSub}>Select the primary interaction needs for the first participant.</Text>
          <View style={styles.progressBar}>
            <View style={styles.progSegDone} />
            <View style={styles.progSegPending} />
          </View>
        </View>

        <View style={styles.modeGrid}>
          {options.map((option) => {
            const isSelected = selected === option.id;
            return (
              <Pressable
                key={option.id}
                onPress={() => setSelected(option.id)}
                style={[styles.modeCard, isSelected && styles.modeCardSelected]}
              >
                <View style={[styles.selIndicator, isSelected && styles.selIndicatorVisible]}>
                  {option.id === "visual" ? <Text style={styles.selCheck}>✓</Text> : null}
                </View>
                <View style={[styles.modeIconWrap, isSelected && styles.modeIconWrapSelected]}>
                  <Ionicons name={option.icon} size={17} color={isSelected ? "#FAF8F4" : "#666666"} />
                </View>
                <Text style={styles.modeName}>{option.title}</Text>
                <Text style={styles.modeDesc}>{option.subtitle}</Text>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>

      <View style={styles.stepActions}>
        <Text style={styles.stepLabel}>Step 1 of 2</Text>
        <Pressable style={styles.btnNext} onPress={() => navigation.navigate("Bridge", { a: selected })}>
          <Text style={styles.btnNextText}>Next: Person B</Text>
          <Ionicons name="arrow-forward" size={14} color="#FAF8F4" />
        </Pressable>
      </View>

      <BottomNav
        active="Home"
        onHomePress={() => navigation.navigate("App")}
        onSetupPress={() => navigation.navigate("Bridge", { a: selected })}
        onBridgePress={() => navigation.navigate("Communicate", { a: selected, b: "none" })}
        onSettingsPress={() => navigation.navigate("Bridge", { a: selected })}
        onProfilePress={() => navigation.navigate("App")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  phoneFrame: {
    flex: 1,
    backgroundColor: "#FAF8F4",
  },
  topNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingBottom: 8,
  },
  navLogo: {
    fontSize: 20,
    fontWeight: "400",
    letterSpacing: -0.5,
    color: "#1a1a1a",
  },
  navLinks: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  navLink: {
    fontSize: 10,
    fontWeight: "500",
    letterSpacing: 1.2,
    color: "#aaa",
    textTransform: "uppercase",
  },
  navLinkActive: {
    fontSize: 10,
    fontWeight: "500",
    letterSpacing: 1.2,
    color: "#1a1a1a",
    textTransform: "uppercase",
  },
  navDividerV: {
    width: 1,
    height: 12,
    backgroundColor: "#ddd",
  },
  dividerLine: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#e0ddd6",
  },
  contentScroll: {
    flex: 1,
  },
  heroArea: {
    paddingHorizontal: 24,
    paddingTop: 28,
    position: "relative",
  },
  progressLabel: {
    fontSize: 9,
    fontWeight: "500",
    letterSpacing: 1.3,
    textTransform: "uppercase",
    color: "#aaa",
    marginBottom: 12,
  },
  pageTitle: {
    fontSize: 32,
    lineHeight: 37,
    letterSpacing: -1,
    fontWeight: "400",
    color: "#1a1a1a",
    maxWidth: 210,
    marginBottom: 8,
  },
  pageSub: {
    fontSize: 12,
    lineHeight: 19,
    color: "#999",
    fontWeight: "300",
    maxWidth: 210,
    marginBottom: 20,
  },
  avatar: {
    position: "absolute",
    right: 24,
    top: 28,
    width: 76,
    height: 76,
    borderRadius: 38,
    overflow: "hidden",
  },
  avatarGrey: {
    width: "100%",
    height: "100%",
    backgroundColor: "#b1aba2",
  },
  progressBar: {
    flexDirection: "row",
    gap: 6,
    marginBottom: 24,
  },
  progSegDone: {
    height: 3,
    flex: 1,
    borderRadius: 100,
    backgroundColor: "#1a1a1a",
  },
  progSegPending: {
    height: 3,
    flex: 1,
    borderRadius: 100,
    backgroundColor: "#e0ddd6",
  },
  modeGrid: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  modeCard: {
    width: "48%",
    minHeight: 100,
    backgroundColor: "#fff",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#e8e4de",
    paddingHorizontal: 14,
    paddingVertical: 16,
    position: "relative",
  },
  modeCardSelected: {
    borderWidth: 1.5,
    borderColor: "#1a1a1a",
    backgroundColor: "#F7F5F0",
  },
  selIndicator: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "transparent",
  },
  selIndicatorVisible: {
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1a1a1a",
  },
  selCheck: {
    fontSize: 9,
    color: "#FAF8F4",
    lineHeight: 12,
  },
  modeIconWrap: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: "#F1EFE8",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  modeIconWrapSelected: {
    backgroundColor: "#1a1a1a",
  },
  modeName: {
    fontSize: 13,
    fontWeight: "500",
    color: "#1a1a1a",
    marginBottom: 3,
  },
  modeDesc: {
    fontSize: 10,
    lineHeight: 14,
    color: "#bbb",
  },
  stepActions: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 10,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#e8e4de",
    backgroundColor: "#FAF8F4",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  stepLabel: {
    fontSize: 11,
    color: "#ccc",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  btnNext: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#1a1a1a",
    borderRadius: 100,
    paddingVertical: 11,
    paddingHorizontal: 20,
  },
  btnNextText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#FAF8F4",
  },
  bottomNav: {
    backgroundColor: "#fff",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#e8e4de",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    paddingTop: 10,
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    gap: 4,
  },
  navItemIcon: {
    width: 36,
    height: 36,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  navItemIconActive: {
    backgroundColor: "#1a1a1a",
  },
  navLabel: {
    fontSize: 9,
    fontWeight: "500",
    letterSpacing: 0.4,
    color: "#ccc",
    textTransform: "uppercase",
  },
  navLabelActive: {
    fontSize: 9,
    fontWeight: "500",
    letterSpacing: 0.4,
    color: "#1a1a1a",
    textTransform: "uppercase",
  },
  navFab: {
    flex: 1,
    alignItems: "center",
    gap: 4,
  },
  navFabBtn: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: "#E85A8A",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -10,
  },
  navFabLabel: {
    fontSize: 9,
    fontWeight: "500",
    letterSpacing: 0.4,
    color: "#E85A8A",
    textTransform: "uppercase",
  },
});
