import { useRouter } from "expo-router";
import { Text, View, Pressable } from "react-native";

export default function Index() {
  const router = useRouter();

  const handleCreateReceipt = () => {
    // You can later replace this with real auth check
    const isAuthenticated = false;

    if (isAuthenticated) {
      router.push("/receipt/create");
    } else {
      router.push("/auth");
    }
  };

  const handleGuestReceipt = () => {
    router.push("/receipt/one-time");
  };

  return (
    <View className="flex-1 items-center justify-center bg-gray-100 px-6">
      {/* App Title */}
      <Text className="text-4xl font-bold text-blue-600 mb-2">
        Receipt Gen
      </Text>

      <Text className="text-gray-500 text-center mb-10">
        Generate receipts instantly. Sign in for full features or continue as guest.
      </Text>

      {/* Primary Action */}
      <Pressable
        onPress={handleCreateReceipt}
        className="w-full bg-blue-600 py-4 rounded-xl mb-4"
      >
        <Text className="text-white text-center font-semibold text-lg">
          Create Receipt
        </Text>
      </Pressable>

      {/* Secondary Action */}
      <Pressable
        onPress={handleGuestReceipt}
        className="w-full bg-white border border-gray-300 py-4 rounded-xl"
      >
        <Text className="text-gray-700 text-center font-semibold text-lg">
          Continue as Guest
        </Text>
      </Pressable>
    </View>
  );
}