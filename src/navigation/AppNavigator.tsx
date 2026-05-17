import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "../screens/LandingScreen";
import AppScreen from "../screens/AppScreen";
import BridgeScreen from "../screens/BridgeScreen";
import CommunicateScreen from "../screens/CommunicateScreen";

export type RootStackParamList = {
  Landing: undefined;
  App: undefined;
  Bridge: undefined;
  Communicate: { a: string; b: string } | undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="App" component={AppScreen} />
      <Stack.Screen name="Bridge" component={BridgeScreen} />
      <Stack.Screen name="Communicate" component={CommunicateScreen} />
    </Stack.Navigator>
  );
}
