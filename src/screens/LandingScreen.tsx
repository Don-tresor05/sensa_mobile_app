import { ScrollView, View, Text, Pressable, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
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
});
