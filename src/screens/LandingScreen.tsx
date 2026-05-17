import { ScrollView, View, Text, Pressable, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RootStackParamList } from "../navigation/AppNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Landing">;

export default function LandingScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <View style={[styles.header, { paddingTop: insets.top + 10 }]}>
        <Text style={styles.brand}>Sensa</Text>
        <View style={styles.nav}>
          <Text style={styles.navItemActive}>LANDING</Text>
          <Pressable onPress={() => navigation.navigate("App")} hitSlop={8}>
            <Text style={styles.navItem}>APP</Text>
          </Pressable>
          <View style={styles.navDivider} />
        </View>
      </View>

      <View style={styles.heroWrap}>
        <View style={styles.badge}>
          <View style={styles.badgeDot} />
          <Text style={styles.badgeText}>CLAY REFINED • ACCESSIBILITY WITHOUT BOUNDARIES</Text>
        </View>

        <Text style={styles.hero}>A quieter way to keep two people understood.</Text>
        <Text style={[styles.hero, styles.heroSecond]}>A quieter way to keep two people understood.</Text>

        <Text style={styles.body}>
          Sensa is the world's first unified translation layer connecting Speech, Sign Language,
          and Text in one seamless, adaptive experience.
        </Text>

        <View style={styles.actions}>
          <Pressable onPress={() => navigation.navigate("App")} style={styles.linkRow}>
            <Text style={styles.linkText}>Launch setup</Text>
            <Text style={styles.linkArrow}>→</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Communicate", { a: "none", b: "none" })} style={styles.linkRow}>
            <Text style={styles.linkText}>Preview bridge</Text>
          </Pressable>
        </View>

        <View style={styles.statBlock}>
          <Text style={styles.statValue}>2 people</Text>
          <Text style={styles.statLabel}>ONE SHARED BRIDGE</Text>
        </View>

        <View style={styles.metricsRow}>
          <View style={styles.metricBlock}>
            <Text style={styles.metricValue}>3 modes</Text>
            <Text style={styles.metricLabel}>ADAPTIVE ACCESS PATHS</Text>
          </View>
          <View style={styles.metricBlock}>
            <Text style={styles.metricValue}>&lt; 1 min</Text>
            <Text style={styles.metricLabel}>FROM SETUP TO LIVE USE</Text>
          </View>
        </View>

        <View style={styles.demoCard}>
          <View style={styles.demoCardHeader}>
            <View>
              <Text style={styles.demoKicker}>INTERFACE DEMO</Text>
              <Text style={styles.demoTitle}>Active Bridge</Text>
            </View>
            <View style={styles.demoBadge}>
              <View style={styles.demoBadgeInner} />
            </View>
          </View>

          <View style={styles.orbWrap}>
            <View style={styles.orbShadow} />
            <View style={styles.orb}>
              <View style={styles.orbSliceA} />
              <View style={styles.orbSliceB} />
              <View style={styles.orbSliceC} />
              <View style={styles.orbSliceD} />
              <View style={styles.orbCore} />
            </View>
          </View>

          <View style={styles.demoList}>
            <View style={styles.demoItem}>
              <View style={styles.demoItemHeader}>
                <Text style={styles.demoItemLabel}>PERSON A</Text>
                <View style={styles.pill}>
                  <Text style={styles.pillText}>gesture</Text>
                </View>
              </View>
              <Text style={styles.demoItemText}>I need the answer shown clearly on screen.</Text>
            </View>

            <View style={styles.demoItem}>
              <View style={styles.demoItemHeader}>
                <Text style={styles.demoItemLabel}>SENSA</Text>
                <View style={styles.pill}>
                  <Text style={styles.pillText}>bridge</Text>
                </View>
              </View>
              <Text style={styles.demoItemText}>Switching to visual prompts and live text.</Text>
            </View>

            <View style={styles.demoItem}>
              <View style={styles.demoItemHeader}>
                <Text style={styles.demoItemLabel}>PERSON B</Text>
                <View style={styles.pill}>
                  <Text style={styles.pillText}>reply</Text>
                </View>
              </View>
              <Text style={styles.demoItemText}>Now I know how to respond without guessing.</Text>
            </View>
          </View>
        </View>

        <View style={styles.capabilitiesSection}>
          <Text style={styles.capabilitiesKicker}>CORE CAPABILITIES</Text>
          <Text style={styles.capabilitiesTitle}>Everything you need to stay connected.</Text>

          <View style={styles.capabilityCard}>
            <View style={styles.capabilityIcon}>
              <Ionicons name="grid-outline" size={24} color="#ff4f8d" />
            </View>
            <Text style={styles.capabilityTitle}>Unified Hub</Text>
            <Text style={styles.capabilityText}>
              The Command Center for all communication. Type, speak, or sign without ever leaving the page.
            </Text>
          </View>

          <View style={styles.capabilityCard}>
            <View style={styles.capabilityIcon}>
              <Ionicons name="hand-left-outline" size={24} color="#ff4f8d" />
            </View>
            <Text style={styles.capabilityTitle}>Sign Lab</Text>
            <Text style={styles.capabilityText}>
              Advanced hand-landmark detection powered by MediaPipe. Real-time recognition via your camera.
            </Text>
          </View>

          <View style={styles.capabilityCard}>
            <View style={styles.capabilityIcon}>
              <Ionicons name="mic-outline" size={24} color="#ff4f8d" />
            </View>
            <Text style={styles.capabilityTitle}>Speech Core</Text>
            <Text style={styles.capabilityText}>
              Ultra-low latency transcription using Groq and Whisper, bridged with neural text-to-speech.
            </Text>
          </View>
        </View>

        <View style={styles.adaptiveSection}>
          <Text style={styles.adaptiveKicker}>ADAPTIVE ACCESS</Text>
          <Text style={styles.adaptiveTitle}>Interfaces that change for the people.</Text>
          <Text style={styles.adaptiveBody}>
            Sensa adapts the interface to the people in the conversation. Instead of asking one side to work around a barrier, it changes the bridge itself.
          </Text>

          <View style={styles.adaptiveBullets}>
            <View style={styles.adaptiveBulletRow}>
              <Ionicons name="checkmark-circle-outline" size={18} color="#111111" />
              <Text style={styles.adaptiveBulletText}>Real-time Sign Detection</Text>
            </View>
            <View style={styles.adaptiveBulletRow}>
              <Ionicons name="checkmark-circle-outline" size={18} color="#111111" />
              <Text style={styles.adaptiveBulletText}>Groq Whisper STT</Text>
            </View>
            <View style={styles.adaptiveBulletRow}>
              <Ionicons name="checkmark-circle-outline" size={18} color="#111111" />
              <Text style={styles.adaptiveBulletText}>Multimodal Neural TTS</Text>
            </View>
          </View>

          <View style={styles.adaptiveCard}>
            <View style={styles.adaptiveCardIcon}>
              <Ionicons name="eye-outline" size={18} color="#111111" />
            </View>
            <Text style={styles.adaptiveCardTitle}>Not Seeing</Text>
            <Text style={styles.adaptiveCardBody}>Voice-forward interaction with clear spoken guidance.</Text>
            <Text style={styles.adaptiveCardSubBody}>
              Prioritizes audio cues and assistant speech when the screen cannot carry the conversation.
            </Text>
          </View>

          <View style={styles.adaptiveCard}>
            <View style={styles.adaptiveCardIcon}>
              <Ionicons name="mic-outline" size={18} color="#111111" />
            </View>
            <Text style={styles.adaptiveCardTitle}>Not Speaking</Text>
            <Text style={styles.adaptiveCardBody}>Gesture and text become the primary bridge.</Text>
            <Text style={styles.adaptiveCardSubBody}>
              Large controls and camera-assisted input reduce the pressure to speak to be understood.
            </Text>
          </View>

          <View style={styles.adaptiveCard}>
            <View style={styles.adaptiveCardIcon}>
              <Ionicons name="volume-high-outline" size={18} color="#111111" />
            </View>
            <Text style={styles.adaptiveCardTitle}>Not Hearing</Text>
            <Text style={styles.adaptiveCardBody}>Visual prompts and readable responses stay in focus.</Text>
            <Text style={styles.adaptiveCardSubBody}>
              Captions, pacing, and legible message cards keep the exchange grounded on screen.
            </Text>
          </View>

          <View style={styles.adaptiveCard}>
            <View style={styles.adaptiveCardIcon}>
              <Ionicons name="person-outline" size={18} color="#111111" />
            </View>
            <Text style={styles.adaptiveCardTitle}>Standard</Text>
            <Text style={styles.adaptiveCardBody}>Keeps everyone in the same shared interaction model.</Text>
            <Text style={styles.adaptiveCardSubBody}>
              Sensa stays useful even without an access barrier by keeping the bridge explicit and calm.
            </Text>
          </View>
        </View>

        <View style={styles.ctaSection}>
          <Text style={styles.ctaKicker}>START YOUR CONVERSATION</Text>
          <Text style={styles.ctaTitle}>Ready to break communication barriers? Launch the bridge setup now.</Text>
          <Pressable onPress={() => navigation.navigate("App")} hitSlop={10}>
            <Text style={styles.ctaLink}>Launch Setup</Text>
          </Pressable>
        </View>

        <View style={styles.integritySection}>
          <View style={styles.integrityRow}>
            <View style={styles.integrityBadge}>
              <Ionicons name="flash-outline" size={22} color="#ff4f8d" />
            </View>
            <View style={styles.integrityTextBlock}>
              <Text style={styles.integrityTitle}>System Integrity</Text>
              <Text style={styles.integritySubtitle}>Backend services status</Text>
            </View>
          </View>

          <View style={styles.integrityMetaRow}>
            <View style={styles.integrityPill}>
              <Text style={styles.integrityPillText}>Connected</Text>
            </View>
            <Text style={styles.integrityVersion}>V1.2.0-MVP</Text>
          </View>
        </View>
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
  heroWrap: {
    paddingHorizontal: 20,
    paddingTop: 52,
  },
  badge: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 999,
    paddingVertical: 9,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.12)",
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 5,
  },
  badgeDot: {
    width: 10,
    height: 10,
    borderRadius: 999,
    backgroundColor: "#ff4f8d",
    marginRight: 10,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 2.2,
    color: "#1b1b1b",
  },
  hero: {
    marginTop: 28,
    fontSize: 57,
    lineHeight: 58,
    letterSpacing: -4.6,
    color: "#111111",
    fontWeight: "400",
    maxWidth: 460,
  },
  heroSecond: {
    marginTop: 0,
  },
  body: {
    marginTop: 28,
    fontSize: 18,
    lineHeight: 28,
    color: "rgba(0,0,0,0.68)",
    maxWidth: 450,
  },
  actions: {
    marginTop: 34,
    flexDirection: "row",
    alignItems: "center",
    gap: 22,
  },
  linkRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  linkText: {
    fontSize: 18,
    color: "#111111",
  },
  linkArrow: {
    fontSize: 20,
    color: "#111111",
    marginLeft: 10,
    marginTop: -1,
  },
  statBlock: {
    marginTop: 38,
    paddingTop: 18,
  },
  statValue: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: "700",
    color: "#111111",
  },
  statLabel: {
    marginTop: 4,
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 2.4,
    color: "rgba(0,0,0,0.45)",
  },
  metricsRow: {
    marginTop: 54,
    gap: 34,
  },
  metricBlock: {
    gap: 6,
  },
  metricValue: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: "700",
    color: "#111111",
  },
  metricLabel: {
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 2.4,
    color: "rgba(0,0,0,0.45)",
  },
  demoCard: {
    marginTop: 40,
    borderRadius: 20,
    backgroundColor: "#fffdf8",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.05)",
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 18,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 4,
  },
  demoCardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  demoKicker: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 2,
    color: "rgba(0,0,0,0.35)",
  },
  demoTitle: {
    marginTop: 4,
    fontSize: 28,
    lineHeight: 32,
    fontWeight: "400",
    color: "#111111",
  },
  demoBadge: {
    width: 40,
    height: 40,
    borderRadius: 999,
    backgroundColor: "#f5efe0",
    alignItems: "center",
    justifyContent: "center",
  },
  demoBadgeInner: {
    width: 12,
    height: 12,
    borderRadius: 3,
    backgroundColor: "#ff4f8d",
  },
  orbWrap: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 38,
  },
  orbShadow: {
    position: "absolute",
    width: 176,
    height: 176,
    borderRadius: 999,
    backgroundColor: "rgba(77, 61, 255, 0.14)",
    opacity: 0.35,
  },
  orb: {
    width: 188,
    height: 188,
    borderRadius: 999,
    backgroundColor: "#0d0b12",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  orbSliceA: {
    position: "absolute",
    width: 188,
    height: 188,
    borderRadius: 999,
    backgroundColor: "rgba(129, 101, 255, 0.55)",
    transform: [{ scaleX: 0.48 }, { scaleY: 1.02 }, { rotate: "-28deg" }],
  },
  orbSliceB: {
    position: "absolute",
    width: 188,
    height: 188,
    borderRadius: 999,
    backgroundColor: "rgba(129, 101, 255, 0.45)",
    transform: [{ scaleX: 0.34 }, { scaleY: 0.72 }, { rotate: "38deg" }],
  },
  orbSliceC: {
    position: "absolute",
    width: 188,
    height: 188,
    borderRadius: 999,
    backgroundColor: "rgba(192, 120, 255, 0.40)",
    transform: [{ scaleX: 0.44 }, { scaleY: 0.86 }, { rotate: "110deg" }],
  },
  orbSliceD: {
    position: "absolute",
    width: 188,
    height: 188,
    borderRadius: 999,
    backgroundColor: "rgba(255, 255, 255, 0.06)",
    transform: [{ scaleX: 0.22 }, { scaleY: 1 }, { rotate: "160deg" }],
  },
  orbCore: {
    position: "absolute",
    width: 50,
    height: 50,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.04)",
  },
  demoList: {
    gap: 12,
  },
  demoItem: {
    backgroundColor: "#f8f1df",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.04)",
  },
  demoItemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  demoItemLabel: {
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1.8,
    color: "rgba(0,0,0,0.58)",
  },
  pill: {
    backgroundColor: "#1e1e1e",
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  pillText: {
    fontSize: 9,
    fontWeight: "700",
    color: "#ffffff",
    textTransform: "lowercase",
  },
  demoItemText: {
    marginTop: 12,
    fontSize: 14,
    lineHeight: 20,
    color: "rgba(0,0,0,0.68)",
  },
  capabilitiesSection: {
    marginTop: 44,
  },
  capabilitiesKicker: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 2.6,
    color: "#ff4f8d",
  },
  capabilitiesTitle: {
    marginTop: 10,
    fontSize: 37,
    lineHeight: 38,
    letterSpacing: -2.6,
    fontWeight: "400",
    color: "#111111",
    maxWidth: 330,
  },
  capabilityCard: {
    marginTop: 22,
    borderRadius: 18,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.05)",
    paddingHorizontal: 18,
    paddingVertical: 18,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 2,
  },
  capabilityIcon: {
    width: 38,
    height: 38,
    borderRadius: 8,
    backgroundColor: "#fbf2de",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },
  capabilityTitle: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "700",
    color: "#111111",
  },
  capabilityText: {
    marginTop: 10,
    fontSize: 15,
    lineHeight: 22,
    color: "rgba(0,0,0,0.68)",
    maxWidth: 310,
  },
  adaptiveSection: {
    marginTop: 44,
  },
  adaptiveKicker: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 2.6,
    color: "rgba(0,0,0,0.45)",
  },
  adaptiveTitle: {
    marginTop: 10,
    fontSize: 38,
    lineHeight: 40,
    letterSpacing: -2.6,
    fontWeight: "400",
    color: "#111111",
    maxWidth: 340,
  },
  adaptiveBody: {
    marginTop: 18,
    fontSize: 18,
    lineHeight: 28,
    color: "rgba(0,0,0,0.72)",
    maxWidth: 360,
  },
  adaptiveBullets: {
    marginTop: 24,
    gap: 12,
  },
  adaptiveBulletRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  adaptiveBulletText: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "700",
    color: "#111111",
  },
  adaptiveCard: {
    marginTop: 26,
    borderRadius: 18,
    backgroundColor: "#fffdf8",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.05)",
    paddingHorizontal: 18,
    paddingVertical: 18,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 2,
  },
  adaptiveCardIcon: {
    width: 38,
    height: 38,
    borderRadius: 8,
    backgroundColor: "#f7f0de",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },
  adaptiveCardTitle: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "700",
    color: "#111111",
  },
  adaptiveCardBody: {
    marginTop: 14,
    fontSize: 15,
    lineHeight: 22,
    color: "#111111",
  },
  adaptiveCardSubBody: {
    marginTop: 16,
    fontSize: 14,
    lineHeight: 21,
    color: "rgba(0,0,0,0.58)",
  },
  ctaSection: {
    marginTop: 70,
    paddingBottom: 30,
  },
  ctaKicker: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 2.2,
    color: "rgba(0,0,0,0.42)",
  },
  ctaTitle: {
    marginTop: 14,
    fontSize: 33,
    lineHeight: 37,
    letterSpacing: -2,
    fontWeight: "400",
    color: "#111111",
    maxWidth: 320,
  },
  ctaLink: {
    marginTop: 36,
    fontSize: 18,
    lineHeight: 24,
    color: "#111111",
  },
  integritySection: {
    marginTop: 56,
    alignItems: "center",
    paddingBottom: 32,
  },
  integrityRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  integrityBadge: {
    width: 44,
    height: 44,
    borderRadius: 999,
    backgroundColor: "#f8f1df",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.04)",
  },
  integrityTextBlock: {
    alignItems: "flex-start",
  },
  integrityTitle: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "700",
    color: "#111111",
  },
  integritySubtitle: {
    marginTop: 2,
    fontSize: 13,
    lineHeight: 18,
    color: "rgba(0,0,0,0.52)",
  },
  integrityMetaRow: {
    marginTop: 24,
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
  },
  integrityPill: {
    backgroundColor: "#0d3a1b",
    borderRadius: 999,
    paddingHorizontal: 18,
    paddingVertical: 7,
  },
  integrityPillText: {
    fontSize: 13,
    lineHeight: 18,
    color: "#8ef0a2",
    fontWeight: "500",
  },
  integrityVersion: {
    fontSize: 12,
    lineHeight: 18,
    color: "rgba(0,0,0,0.50)",
    fontWeight: "700",
    letterSpacing: 1.2,
  },
});
