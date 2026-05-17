import { View, Text, Pressable } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Communicate">;

export default function CommunicateScreen({ navigation, route }: Props) {
  const a = route.params?.a ?? "none";
  const b = route.params?.b ?? "none";

  return (
    <View className="flex-1 bg-canvas px-6 py-10">
      <Text className="text-2xl font-semibold text-primary mb-2">Bridge Established</Text>
      <Text className="text-sm text-muted mb-8">Person A: {a} • Person B: {b}</Text>

      <View className="rounded-clay-lg border border-hairline bg-surface-soft p-6">
        <Text className="text-base font-semibold text-primary mb-2">Conversation feed</Text>
        <Text className="text-sm text-muted">This screen will become the communication layer with voice, gesture, and assistant input.</Text>
      </View>

      <Pressable
        onPress={() => navigation.navigate("App")}
        className="mt-8 rounded-clay-lg bg-primary px-5 py-4"
      >
        <Text className="text-center text-white font-semibold">Return to App</Text>
      </Pressable>
    </View>
  );
}
