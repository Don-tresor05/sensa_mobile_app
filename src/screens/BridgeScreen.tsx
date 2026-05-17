import { View, Text, Pressable } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Bridge">;

const conditions = [
  { id: "visual", title: "Not Seeing" },
  { id: "vocal", title: "Not Speaking" },
  { id: "auditory", title: "Not Hearing" },
  { id: "none", title: "Standard" },
] as const;

export default function BridgeScreen({ navigation }: Props) {
  return (
    <View className="flex-1 bg-canvas px-6 py-10">
      <Text className="text-2xl font-semibold text-primary mb-4">Define Person A</Text>
      <Text className="text-sm text-muted mb-8">Select the primary interaction needs for the first participant.</Text>

      <View className="space-y-3">
        {conditions.map((condition) => (
          <Pressable
            key={condition.id}
            onPress={() => navigation.navigate("Communicate", { a: condition.id, b: "none" })}
            className="rounded-clay-md border border-hairline bg-white px-4 py-4"
          >
            <Text className="font-semibold text-primary">{condition.title}</Text>
            <Text className="text-sm text-muted">{condition.id === "none" ? "Full multimodal access" : condition.id === "visual" ? "Audio & voice focus" : condition.id === "vocal" ? "Gesture & text focus" : "Visual & haptic focus"}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
