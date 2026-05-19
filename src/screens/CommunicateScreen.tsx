import { useMemo, useState } from "react";
import { View, Text, Pressable, ScrollView, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RootStackParamList } from "../navigation/AppNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Communicate">;

type PersonState = "a" | "b";

const personPresets = {
  a: {
    pillClass: "a",
    orbClass: "orbGreen",
    orbLabel: "Gesture Bridge",
    speakTitle: "Tap to Speak",
    speakSub: "Voice-over mode active",
    speakIcon: "mic-outline" as const,
  },
  b: {
    pillClass: "b",
    orbClass: "orbRed",
    orbLabel: "Aural Focus",
    speakTitle: "Gesture Input",
    speakSub: "Sign detection active",
    speakIcon: "hand-left-outline" as const,
  },
} as const;

export default function CommunicateScreen({ navigation, route }: Props) {
  const insets = useSafeAreaInsets();
  const a = route.params?.a ?? "none";
  const b = route.params?.b ?? "none";
  const [current, setCurrent] = useState<PersonState>("a");

  const preset = useMemo(() => personPresets[current], [current]);
  const activeA = current === "a";
  const activeB = current === "b";

  return (
    <View style={styles.phoneFrame}>
      <View style={[styles.topBar, { paddingTop: insets.top + 8 }]}>
        <Pressable style={styles.cancelBtn} onPress={() => navigation.navigate("Bridge", { a })} hitSlop={8}>
          <Ionicons name="arrow-back" size={13} color="#aaa" />
          <Text style={styles.cancelText}>Cancel Bridge</Text>
        </Pressable>
        <View style={styles.liveBadge}>
          <View style={styles.liveDot} />
          <Text style={styles.liveText}>Live Bridge</Text>
        </View>
      </View>

      <View style={styles.personsBar}>
        <Pressable style={[styles.personPill, activeA && styles.personPillActive]} onPress={() => setCurrent("a")}>
          <View style={styles.personPillIcon}>
            <Ionicons name="eye-outline" size={13} color={activeA ? "#fff" : "#888"} />
          </View>
          <View style={styles.personInfo}>
            <Text style={[styles.personLabel, activeA && styles.personLabelActive]}>Person A</Text>
            <Text style={[styles.personMode, activeA && styles.personModeActive]}>Visual</Text>
          </View>
        </Pressable>

        <Pressable style={styles.swapIcon} onPress={() => setCurrent((prev) => (prev === "a" ? "b" : "a"))}>
          <Text style={styles.swapGlyph}>⇄</Text>
        </Pressable>

        <Pressable style={[styles.personPill, activeB && styles.personPillActive]} onPress={() => setCurrent("b")}>
          <View style={styles.personPillIcon}>
            <Ionicons name="mic-outline" size={13} color={activeB ? "#fff" : "#888"} />
          </View>
          <View style={styles.personInfo}>
            <Text style={[styles.personLabel, activeB && styles.personLabelActive]}>Person B</Text>
            <Text style={[styles.personMode, activeB && styles.personModeActive]}>Vocal</Text>
          </View>
        </Pressable>
      </View>

      <View style={styles.contentArea}>
        <View style={styles.orbSection}>
          <View style={[styles.orbWrap, current === "a" ? styles.orbGreen : styles.orbRed]}>
            <View style={styles.orbRing} />
            <View style={styles.orbBg} />
            <Text style={styles.orbLabel}>{preset.orbLabel}</Text>
          </View>
          <View style={styles.streamStatus}>
            <Text style={styles.streamStatusText}>Multimodal stream initialized</Text>
            <View style={styles.streamDot} />
          </View>
        </View>

        <View style={styles.cameraSection}>
          <View style={styles.cameraInner}>
            <Ionicons name="hand-left-outline" size={28} color="#333" />
            <Text style={styles.cameraLabel}>Initializing…</Text>
          </View>
          <View style={styles.cameraBadgeGreen}>
            <View style={styles.smallDot} />
            <Text style={styles.cameraBadgeGreenText}>Camera Active</Text>
          </View>
          <View style={styles.cameraBadge}>
            <Text style={styles.cameraBadgeText}>Surgical Bridge Active</Text>
          </View>
        </View>

        <Pressable style={styles.speakSection} onPress={() => navigation.navigate("App")}>
          <View style={styles.speakIcon}>
            <Ionicons name={preset.speakIcon} size={20} color="#fff" />
          </View>
          <View style={styles.speakTextWrap}>
            <Text style={styles.speakTitle}>{preset.speakTitle}</Text>
            <Text style={styles.speakSub}>{preset.speakSub}</Text>
          </View>
          <View style={styles.speakArrow}>
            <Ionicons name="chevron-forward" size={16} color="#555" />
          </View>
        </Pressable>
      </View>

      <View style={[styles.bottomNav, { paddingBottom: insets.bottom + 14 }]}>
        <Pressable style={styles.navItem} onPress={() => navigation.navigate("Landing")}>
          <View style={styles.navItemIcon}>
            <Ionicons name="home" size={20} color="#ccc" />
          </View>
          <Text style={styles.navLabel}>Home</Text>
        </Pressable>
        <Pressable style={styles.navItem} onPress={() => navigation.navigate("App")}>
          <View style={styles.navItemIcon}>
            <Ionicons name="people" size={20} color="#ccc" />
          </View>
          <Text style={styles.navLabel}>Setup</Text>
        </Pressable>
        <Pressable style={styles.navFab} onPress={() => navigation.navigate("Communicate", { a, b })}>
          <View style={styles.navFabBtn}>
            <Ionicons name="pulse" size={22} color="#fff" />
          </View>
          <Text style={styles.navFabLabel}>Bridge</Text>
        </Pressable>
        <Pressable style={styles.navItem} onPress={() => navigation.navigate("Bridge", { a })}>
          <View style={styles.navItemIcon}>
            <Ionicons name="settings" size={20} color="#ccc" />
          </View>
          <Text style={styles.navLabel}>Settings</Text>
        </Pressable>
        <Pressable style={styles.navItem} onPress={() => navigation.navigate("App")}>
          <View style={styles.navItemIcon}>
            <Ionicons name="person" size={20} color="#ccc" />
          </View>
          <Text style={styles.navLabel}>Profile</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  phoneFrame: {
    flex: 1,
    backgroundColor: "#FAF8F4",
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingBottom: 6,
    borderBottomWidth: 0.5,
    borderBottomColor: "#e8e4de",
  },
  cancelBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  cancelText: {
    fontSize: 10,
    fontWeight: "500",
    letterSpacing: 0.5,
    color: "#aaa",
    textTransform: "uppercase",
  },
  liveBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  liveDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#22c55e",
  },
  liveText: {
    fontSize: 9,
    fontWeight: "500",
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "#1a1a1a",
  },
  personsBar: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 10,
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#e8e4de",
    padding: 8,
    gap: 6,
  },
  personPill: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  personPillActive: {
    backgroundColor: "#1a1a1a",
  },
  personPillIcon: {
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1EFE8",
  },
  personInfo: {
    flexDirection: "column",
  },
  personLabel: {
    fontSize: 8,
    fontWeight: "500",
    letterSpacing: 1.1,
    textTransform: "uppercase",
    color: "#aaa",
  },
  personLabelActive: {
    color: "rgba(255,255,255,0.6)",
  },
  personMode: {
    fontSize: 12,
    fontWeight: "500",
    color: "#1a1a1a",
  },
  personModeActive: {
    color: "#fff",
  },
  swapIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 0.5,
    borderColor: "#e8e4de",
    alignItems: "center",
    justifyContent: "center",
  },
  swapGlyph: {
    fontSize: 14,
    color: "#bbb",
  },
  contentArea: {
    flex: 1,
    overflow: "hidden",
  },
  orbSection: {
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 12,
  },
  orbWrap: {
    width: 130,
    height: 130,
    borderRadius: 65,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  orbGreen: {
    backgroundColor: "#0a1f15",
  },
  orbRed: {
    backgroundColor: "#1a0000",
  },
  orbRing: {
    position: "absolute",
    inset: -6,
    borderRadius: 65,
    borderWidth: 1.5,
    borderColor: "rgba(255,255,255,0.08)",
  },
  orbBg: {
    position: "absolute",
    inset: 0,
    borderRadius: 65,
    backgroundColor: "rgba(255,255,255,0.06)",
  },
  orbLabel: {
    fontSize: 11,
    fontWeight: "500",
    letterSpacing: 0.4,
    color: "rgba(255,255,255,0.7)",
    zIndex: 2,
  },
  streamStatus: {
    marginTop: 14,
    alignItems: "center",
  },
  streamStatusText: {
    fontSize: 11,
    color: "#bbb",
    letterSpacing: 0.4,
  },
  streamDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#22c55e",
    marginTop: 4,
  },
  cameraSection: {
    marginHorizontal: 16,
    backgroundColor: "#111",
    borderRadius: 18,
    overflow: "hidden",
    height: 140,
    position: "relative",
  },
  cameraInner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#0d0d0d",
  },
  cameraLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "#555",
  },
  cameraBadgeGreen: {
    position: "absolute",
    top: 10,
    left: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: "rgba(34,197,94,0.12)",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
  },
  smallDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#22c55e",
  },
  cameraBadgeGreenText: {
    fontSize: 9,
    fontWeight: "500",
    color: "#22c55e",
    letterSpacing: 0.4,
    textTransform: "uppercase",
  },
  cameraBadge: {
    position: "absolute",
    right: 10,
    bottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.1)",
  },
  cameraBadgeText: {
    fontSize: 9,
    fontWeight: "500",
    color: "#FAF8F4",
    letterSpacing: 0.4,
    textTransform: "uppercase",
  },
  speakSection: {
    marginHorizontal: 16,
    marginTop: 12,
    backgroundColor: "#1a1a1a",
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  speakIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#E85A8A",
    alignItems: "center",
    justifyContent: "center",
  },
  speakTextWrap: {
    flex: 1,
  },
  speakTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#FAF8F4",
    marginBottom: 2,
  },
  speakSub: {
    fontSize: 11,
    color: "#E85A8A",
  },
  speakArrow: {
    width: 16,
    alignItems: "center",
    justifyContent: "center",
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
  navLabel: {
    fontSize: 9,
    fontWeight: "500",
    letterSpacing: 0.4,
    color: "#ccc",
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
