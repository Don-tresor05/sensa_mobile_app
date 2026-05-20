import { useEffect, useRef, useState } from "react";
import { Animated, Easing, Image, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const shimmer = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const loop = Animated.loop(
      Animated.timing(shimmer, {
        toValue: 1,
        duration: 1200,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      })
    );

    loop.start();
    return () => loop.stop();
  }, [shimmer]);

  return (
    <SafeAreaProvider>
      {showSplash ? (
        <View style={styles.splash}>
          <View style={styles.bgOrbTop} />
          <View style={styles.bgOrbBottom} />

          <View style={styles.card}>
            <View style={styles.logoShell}>
              <Image source={require("./assets/images/logo.png")} style={styles.logo} resizeMode="contain" />
            </View>
            <Text style={styles.title}>Sensa</Text>
            <Text style={styles.subtitle}>A quieter way to keep people understood.</Text>

            <View style={styles.loaderTrack}>
              <Animated.View
                style={[
                  styles.loaderShimmer,
                  {
                    transform: [
                      {
                        translateX: shimmer.interpolate({
                          inputRange: [0, 1],
                          outputRange: [-96, 268],
                        }),
                      },
                    ],
                  },
                ]}
              />
            </View>
            <Text style={styles.loaderLabel}>Loading your bridge</Text>
          </View>
        </View>
      ) : (
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      )}
      <StatusBar style="dark" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    backgroundColor: "#F7F3EC",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  bgOrbTop: {
    position: "absolute",
    top: -60,
    right: -70,
    width: 180,
    height: 180,
    borderRadius: 180,
    backgroundColor: "rgba(17,17,17,0.04)",
  },
  bgOrbBottom: {
    position: "absolute",
    bottom: -80,
    left: -60,
    width: 220,
    height: 220,
    borderRadius: 220,
    backgroundColor: "rgba(17,17,17,0.03)",
  },
  card: {
    width: "82%",
    maxWidth: 360,
    borderRadius: 32,
    paddingVertical: 28,
    paddingHorizontal: 24,
    backgroundColor: "rgba(255,255,255,0.72)",
    borderWidth: 1,
    borderColor: "rgba(17,17,17,0.06)",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 12 },
    elevation: 6,
    alignItems: "center",
  },
  logoShell: {
    width: 132,
    height: 132,
    borderRadius: 36,
    backgroundColor: "rgba(17,17,17,0.03)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },
  logo: {
    width: 112,
    height: 112,
    tintColor: "#111111",
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    letterSpacing: -1,
    color: "#111111",
  },
  subtitle: {
    marginTop: 6,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
    color: "#5f5a52",
  },
  loaderTrack: {
    marginTop: 22,
    width: "100%",
    height: 8,
    borderRadius: 999,
    backgroundColor: "rgba(17,17,17,0.08)",
    overflow: "hidden",
  },
  loaderShimmer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 96,
    height: "100%",
    borderRadius: 999,
    backgroundColor: "#111111",
    opacity: 0.9,
  },
  loaderLabel: {
    marginTop: 10,
    fontSize: 12,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    color: "#7a756c",
  },
});
