import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type TopNavProps = {
  active: "Landing" | "App" | "Bridge";
  onPressApp?: () => void;
  onPressLanding?: () => void;
};

export function TopNav({ active, onPressApp, onPressLanding }: TopNavProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.topNav, { paddingTop: insets.top + 12 }]}>
      <View style={styles.navBrand}>
        <View style={styles.navLogoShell}>
          <Image source={require("../../assets/images/logo.png")} style={styles.navLogo} resizeMode="contain" />
        </View>
        <Text style={styles.navLogoText}>Sensa</Text>
      </View>
      <View style={styles.navLinks}>
        <Pressable onPress={onPressLanding} hitSlop={8}>
          <Text style={active === "Landing" ? styles.navLinkActive : styles.navLink}>Landing</Text>
        </Pressable>
        <View style={styles.navDividerV} />
        <Pressable onPress={onPressApp} hitSlop={8}>
          <Text style={active === "App" ? styles.navLinkActive : styles.navLink}>App</Text>
        </Pressable>
      </View>
    </View>
  );
}

type BottomNavProps = {
  onHomePress: () => void;
  onSetupPress: () => void;
  onBridgePress: () => void;
  onSettingsPress: () => void;
  onProfilePress: () => void;
  active?: "Home" | "Setup" | "Settings" | "Profile";
};

export function BottomNav({ onHomePress, onSetupPress, onBridgePress, onSettingsPress, onProfilePress, active }: BottomNavProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.bottomNav, { paddingBottom: insets.bottom + 8 }]}>
      <Pressable style={styles.navItem} onPress={onHomePress}>
        <View style={[styles.navItemIcon, active === "Home" && styles.navItemIconActive]}>
          <Ionicons name="home" size={20} color={active === "Home" ? "#FAF8F4" : "#ccc"} />
        </View>
        <Text style={active === "Home" ? styles.navLabelActive : styles.navLabel}>Home</Text>
      </Pressable>
      <Pressable style={styles.navItem} onPress={onSetupPress}>
        <View style={[styles.navItemIcon, active === "Setup" && styles.navItemIconActive]}>
          <Ionicons name="people" size={20} color={active === "Setup" ? "#FAF8F4" : "#ccc"} />
        </View>
        <Text style={active === "Setup" ? styles.navLabelActive : styles.navLabel}>Setup</Text>
      </Pressable>
      <Pressable style={styles.navFab} onPress={onBridgePress}>
        <View style={styles.navFabBtn}>
          <Ionicons name="pulse" size={22} color="#fff" />
        </View>
        <Text style={styles.navFabLabel}>Bridge</Text>
      </Pressable>
      <Pressable style={styles.navItem} onPress={onSettingsPress}>
        <View style={[styles.navItemIcon, active === "Settings" && styles.navItemIconActive]}>
          <Ionicons name="settings" size={20} color={active === "Settings" ? "#FAF8F4" : "#ccc"} />
        </View>
        <Text style={active === "Settings" ? styles.navLabelActive : styles.navLabel}>Settings</Text>
      </Pressable>
      <Pressable style={styles.navItem} onPress={onProfilePress}>
        <View style={[styles.navItemIcon, active === "Profile" && styles.navItemIconActive]}>
          <Ionicons name="person" size={20} color={active === "Profile" ? "#FAF8F4" : "#ccc"} />
        </View>
        <Text style={active === "Profile" ? styles.navLabelActive : styles.navLabel}>Profile</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  topNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingBottom: 8,
  },
  navBrand: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  navLogoShell: {
    width: 38,
    height: 38,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  navLogo: {
    width: 28,
    height: 28,
    tintColor: "#111111",
  },
  navLogoText: {
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
  bottomNav: {
    backgroundColor: "#fff",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#e8e4de",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    paddingTop: 8,
    paddingBottom: 8,
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
