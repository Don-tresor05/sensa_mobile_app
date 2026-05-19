import { ScrollView, View, Text, Pressable, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RootStackParamList } from "../navigation/AppNavigator";
import { TopNav } from "../components/AppChrome";

type Props = NativeStackScreenProps<RootStackParamList, "Landing">;

export default function LandingScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <TopNav active="Landing" onPressLanding={() => undefined} onPressApp={() => navigation.navigate("App")} />
      <ScrollView style={styles.scroll} contentContainerStyle={[styles.content, { paddingBottom: insets.bottom + 24 }]} showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <View style={styles.badge}>
            <View style={styles.badgeDot} />
            <Text style={styles.badgeText}>Clay refined · Accessibility without boundaries</Text>
          </View>

          <Text style={styles.heroTitle}>A quieter way to keep two people understood.</Text>
          <Text style={styles.heroSub}>
            Sensa is the world's first unified translation layer connecting Speech, Sign Language, and Text in one seamless, adaptive experience.
          </Text>

          <View style={styles.heroCtas}>
            <Pressable onPress={() => navigation.navigate("App")} style={styles.ctaPrimary}>
              <Text style={styles.ctaPrimaryText}>Launch Setup →</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Communicate", { a: "none", b: "none" })} style={styles.ctaSecondary}>
              <Text style={styles.ctaSecondaryText}>Preview Bridge</Text>
            </Pressable>
          </View>

          <View style={styles.statsRow}>
            <View style={styles.stat}>
              <Text style={styles.statNum}>2</Text>
              <Text style={styles.statLabel}>People, one shared bridge</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNum}>3</Text>
              <Text style={styles.statLabel}>Adaptive access paths</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNum}>&lt;1m</Text>
              <Text style={styles.statLabel}>From setup to live use</Text>
            </View>
          </View>
        </View>

        <View style={styles.demoCard}>
          <View style={styles.demoHeader}>
            <View>
              <Text style={styles.demoLabel}>Interface Demo</Text>
              <Text style={styles.demoTitle}>Active Bridge</Text>
            </View>
            <View style={styles.demoIconBtn}>
              <Ionicons name="grid-outline" size={15} color="#E85A8A" />
            </View>
          </View>

          <View style={styles.orbContainer}>
            <View style={styles.orb} />
          </View>

          <View style={styles.msgList}>
            <View style={styles.msgRow}>
              <View style={styles.msgTop}>
                <Text style={styles.msgFrom}>Person A</Text>
                <Text style={[styles.msgTag, styles.tagGesture]}>gesture</Text>
              </View>
              <Text style={styles.msgText}>I need the answer shown clearly on screen.</Text>
            </View>
            <View style={styles.msgRow}>
              <View style={styles.msgTop}>
                <Text style={styles.msgFrom}>Sensa</Text>
                <Text style={[styles.msgTag, styles.tagBridge]}>bridge</Text>
              </View>
              <Text style={styles.msgText}>Switching to visual prompts and live text.</Text>
            </View>
            <View style={styles.msgRow}>
              <View style={styles.msgTop}>
                <Text style={styles.msgFrom}>Person B</Text>
                <Text style={[styles.msgTag, styles.tagReply]}>reply</Text>
              </View>
              <Text style={styles.msgText}>Now I know how to respond without guessing.</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionEyebrow}>Core Capabilities</Text>
          <Text style={styles.sectionTitle}>Everything you need to stay connected.</Text>

          <View style={styles.capCards}>
            <View style={styles.capCard}>
              <View style={styles.capIcon}>
                <Ionicons name="grid-outline" size={18} color="#E85A8A" />
              </View>
              <Text style={styles.capName}>Unified Hub</Text>
              <Text style={styles.capDesc}>The Command Center for all communication. Type, speak, or sign without ever leaving the page.</Text>
            </View>

            <View style={styles.twoCol}>
              <View style={[styles.capCard, styles.capCardHalf]}>
                <View style={styles.capIcon}>
                  <Ionicons name="hand-left-outline" size={18} color="#E85A8A" />
                </View>
                <Text style={styles.capName}>Sign Lab</Text>
                <Text style={styles.capDesc}>Hand-landmark detection powered by MediaPipe. Real-time via your camera.</Text>
              </View>
              <View style={[styles.capCard, styles.capCardHalf]}>
                <View style={styles.capIcon}>
                  <Ionicons name="mic-outline" size={18} color="#E85A8A" />
                </View>
                <Text style={styles.capName}>Speech Core</Text>
                <Text style={styles.capDesc}>Ultra-low latency transcription via Groq &amp; Whisper, bridged with neural TTS.</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.accessSection}>
          <Text style={styles.sectionEyebrow}>Adaptive Access</Text>
          <Text style={styles.sectionTitle}>Interfaces that change for the people.</Text>
          <Text style={styles.accessDesc}>
            Sensa adapts to the people in the conversation - instead of asking one side to work around a barrier, it changes the bridge itself.
          </Text>

          <View style={styles.featuresList}>
            <View style={styles.featItem}>
              <Ionicons name="checkmark-circle-outline" size={15} color="#E85A8A" />
              <Text style={styles.featText}>Real-time Sign Detection</Text>
            </View>
            <View style={styles.featItem}>
              <Ionicons name="checkmark-circle-outline" size={15} color="#E85A8A" />
              <Text style={styles.featText}>Groq Whisper STT</Text>
            </View>
            <View style={styles.featItem}>
              <Ionicons name="checkmark-circle-outline" size={15} color="#E85A8A" />
              <Text style={styles.featText}>Multimodal Neural TTS</Text>
            </View>
          </View>

          <View style={styles.modeGrid}>
            <View style={styles.modeCard}>
              <View style={styles.modeIcon}>
                <Ionicons name="eye-outline" size={16} color="#666666" />
              </View>
              <Text style={styles.modeName}>Not Seeing</Text>
              <Text style={styles.modeDesc}>Voice-forward with clear spoken guidance</Text>
            </View>
            <View style={styles.modeCard}>
              <View style={styles.modeIcon}>
                <Ionicons name="mic-off-outline" size={16} color="#666666" />
              </View>
              <Text style={styles.modeName}>Not Speaking</Text>
              <Text style={styles.modeDesc}>Gesture and text become the primary bridge</Text>
            </View>
            <View style={styles.modeCard}>
              <View style={styles.modeIcon}>
                <Ionicons name="volume-high-outline" size={16} color="#666666" />
              </View>
              <Text style={styles.modeName}>Not Hearing</Text>
              <Text style={styles.modeDesc}>Visual prompts and readable responses stay in focus</Text>
            </View>
            <View style={styles.modeCard}>
              <View style={styles.modeIcon}>
                <Ionicons name="person-outline" size={16} color="#666666" />
              </View>
              <Text style={styles.modeName}>Standard</Text>
              <Text style={styles.modeDesc}>One shared interaction model for everyone</Text>
            </View>
          </View>
        </View>

        <View style={styles.ctaSection}>
          <Text style={styles.ctaEyebrow}>Start your conversation</Text>
          <Text style={styles.ctaTitle}>Ready to break communication barriers?</Text>
          <Pressable onPress={() => navigation.navigate("App")}>
            <Text style={styles.ctaBtnText}>Launch Setup →</Text>
          </Pressable>
        </View>

        <View style={styles.statusBar}>
          <View style={styles.statusLeft}>
            <View style={styles.statusIcon}>
              <Ionicons name="flash-outline" size={17} color="#E85A8A" />
            </View>
            <View>
              <Text style={styles.statusName}>System Integrity</Text>
              <Text style={styles.statusSub}>Backend services status</Text>
            </View>
          </View>
          <View style={styles.statusRight}>
            <Text style={styles.connectedBadge}>Connected</Text>
            <Text style={styles.versionLabel}>V1.2.0-MVP</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fbf8ef",
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingBottom: 24,
  },
  hero: {
    paddingHorizontal: 24,
    paddingTop: 20,
    backgroundColor: "#FAF8F4",
  },
  badge: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.10)",
    marginBottom: 18,
  },
  badgeDot: {
    width: 6,
    height: 6,
    borderRadius: 999,
    backgroundColor: "#ff4f8d",
    marginRight: 8,
  },
  badgeText: {
    fontSize: 9,
    fontWeight: "500",
    letterSpacing: 1.1,
    color: "#555555",
    textTransform: "uppercase",
  },
  heroTitle: {
    fontSize: 36,
    lineHeight: 41,
    letterSpacing: -1,
    color: "#1a1a1a",
    fontWeight: "400",
    maxWidth: 330,
    marginBottom: 12,
  },
  heroSub: {
    fontSize: 13,
    lineHeight: 21,
    color: "#777777",
    fontWeight: "300",
    marginBottom: 22,
    maxWidth: 335,
  },
  heroCtas: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 28,
  },
  ctaPrimary: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    borderRadius: 999,
    paddingVertical: 12,
    alignItems: "center",
  },
  ctaPrimaryText: {
    color: "#FAF8F4",
    fontSize: 12,
    fontWeight: "500",
  },
  ctaSecondary: {
    flex: 1,
    backgroundColor: "transparent",
    borderRadius: 999,
    paddingVertical: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  ctaSecondaryText: {
    color: "#1a1a1a",
    fontSize: 12,
    fontWeight: "500",
  },
  statsRow: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#e0ddd6",
    paddingTop: 16,
    paddingBottom: 20,
    flexDirection: "row",
  },
  stat: {
    flex: 1,
    alignItems: "center",
    borderRightWidth: StyleSheet.hairlineWidth,
    borderRightColor: "#e0ddd6",
  },
  statNum: {
    fontSize: 22,
    lineHeight: 26,
    color: "#1a1a1a",
    fontWeight: "400",
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 8,
    color: "#999999",
    letterSpacing: 1.1,
    textTransform: "uppercase",
    textAlign: "center",
    paddingHorizontal: 6,
    lineHeight: 12,
  },
  demoCard: {
    marginHorizontal: 16,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#e8e4de",
    overflow: "hidden",
  },
  demoHeader: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#f0ede8",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  demoLabel: {
    fontSize: 9,
    letterSpacing: 1.1,
    textTransform: "uppercase",
    color: "#aaa",
    marginBottom: 2,
  },
  demoTitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#1a1a1a",
  },
  demoIconBtn: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: "#FDE8EF",
    alignItems: "center",
    justifyContent: "center",
  },
  orbContainer: {
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "#fff",
  },
  orb: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#1a0a40",
    overflow: "hidden",
    position: "relative",
  },
  msgList: {
    paddingHorizontal: 12,
    paddingBottom: 14,
    gap: 7,
  },
  msgRow: {
    backgroundColor: "#FAF8F4",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#ede9e2",
  },
  msgTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 3,
  },
  msgFrom: {
    fontSize: 9,
    fontWeight: "500",
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "#aaa",
  },
  msgTag: {
    fontSize: 8,
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 100,
    fontWeight: "500",
    letterSpacing: 0.6,
    overflow: "hidden",
  },
  tagGesture: {
    backgroundColor: "#E8F0FE",
    color: "#3B5FC0",
  },
  tagBridge: {
    backgroundColor: "#1a1a1a",
    color: "#FAF8F4",
  },
  tagReply: {
    backgroundColor: "#EAF3DE",
    color: "#3B6D11",
  },
  msgText: {
    fontSize: 12,
    lineHeight: 18,
    color: "#333333",
  },
  section: {
    paddingHorizontal: 24,
    paddingTop: 28,
  },
  capabilitiesSection: {
    paddingHorizontal: 24,
    paddingTop: 28,
  },
  capabilitiesKicker: {
    fontSize: 9,
    fontWeight: "500",
    letterSpacing: 1.3,
    color: "#E85A8A",
    textTransform: "uppercase",
    marginBottom: 8,
  },
  capabilitiesTitle: {
    fontSize: 26,
    lineHeight: 31,
    letterSpacing: -0.5,
    fontWeight: "400",
    color: "#1a1a1a",
    marginBottom: 20,
  },
  capCards: {
    gap: 10,
  },
  capCard: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#e8e4de",
    paddingHorizontal: 18,
    paddingVertical: 16,
  },
  capIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#FDE8EF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  capName: {
    fontSize: 14,
    fontWeight: "500",
    color: "#1a1a1a",
    marginBottom: 4,
  },
  capDesc: {
    fontSize: 15,
    lineHeight: 22,
    color: "#888888",
  },
  capCardHalf: {
    flex: 1,
  },
  sectionEyebrow: {
    fontSize: 9,
    fontWeight: "500",
    letterSpacing: 1.3,
    color: "#E85A8A",
    textTransform: "uppercase",
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 26,
    lineHeight: 31,
    letterSpacing: -0.5,
    fontWeight: "400",
    color: "#1a1a1a",
    marginBottom: 20,
  },
  twoCol: {
    flexDirection: "row",
    gap: 10,
  },
  accessSection: {
    paddingHorizontal: 24,
    paddingTop: 28,
  },
  accessDesc: {
    fontSize: 13,
    lineHeight: 21,
    color: "#888888",
    marginBottom: 14,
  },
  featuresList: {
    gap: 7,
    marginBottom: 20,
  },
  featItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  featText: {
    fontSize: 12,
    lineHeight: 16,
    color: "#444444",
    fontWeight: "500",
  },
  modeGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  modeCard: {
    width: "48%",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#e8e4de",
    padding: 14,
  },
  modeIcon: {
    width: 32,
    height: 32,
    borderRadius: 9,
    backgroundColor: "#F1EFE8",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 9,
  },
  modeName: {
    fontSize: 12,
    fontWeight: "500",
    color: "#1a1a1a",
    marginBottom: 4,
  },
  modeDesc: {
    fontSize: 10,
    lineHeight: 15,
    color: "#aaa",
  },
  ctaSection: {
    marginTop: 28,
    marginHorizontal: 16,
    backgroundColor: "#1a1a1a",
    borderRadius: 24,
    paddingHorizontal: 22,
    paddingVertical: 28,
    alignItems: "center",
  },
  ctaEyebrow: {
    fontSize: 9,
    letterSpacing: 1.3,
    textTransform: "uppercase",
    color: "#888",
    marginBottom: 10,
  },
  ctaTitle: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: "400",
    color: "#FAF8F4",
    letterSpacing: -0.5,
    textAlign: "center",
    marginBottom: 20,
  },
  ctaBtnText: {
    backgroundColor: "#FAF8F4",
    color: "#1a1a1a",
    borderRadius: 100,
    paddingVertical: 13,
    paddingHorizontal: 32,
    fontSize: 13,
    fontWeight: "500",
    width: "100%",
    textAlign: "center",
  },
  statusBar: {
    marginTop: 20,
    marginHorizontal: 16,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#e8e4de",
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  statusLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  statusIcon: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: "#FDE8EF",
    alignItems: "center",
    justifyContent: "center",
  },
  statusName: {
    fontSize: 13,
    fontWeight: "500",
    color: "#1a1a1a",
  },
  statusSub: {
    fontSize: 10,
    color: "#aaa",
    marginTop: 1,
  },
  statusRight: {
    alignItems: "flex-end",
    gap: 3,
  },
  connectedBadge: {
    backgroundColor: "#1a1a1a",
    color: "#FAF8F4",
    fontSize: 10,
    fontWeight: "500",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 999,
    overflow: "hidden",
  },
  versionLabel: {
    fontSize: 9,
    color: "#aaa",
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },
});
