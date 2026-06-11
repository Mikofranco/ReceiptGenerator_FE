import { useRouter } from "expo-router";
import { Text, View, Pressable } from "react-native";

export default function AuthScreen() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/auth/login");
  };

  const handleRegister = () => {
    router.push("/auth/register");
  };

  const handleGuest = () => {
    router.push("/receipt/one-time");
  };

  return (
    <View className="flex-1 bg-white px-6 justify-center">
      <Text className="text-3xl font-bold text-center text-blue-600 mb-2">
        Welcome Back
      </Text>

      <Text className="text-gray-500 text-center mb-10">
        Sign in to manage receipts or continue as a guest
      </Text>

      {/* Login */}
      <Pressable
        onPress={handleLogin}
        className="bg-blue-600 py-4 rounded-xl mb-4"
      >
        <Text className="text-white text-center font-semibold">
          Sign In
        </Text>
      </Pressable>

      {/* Register */}
      <Pressable
        onPress={handleRegister}
        className="bg-white border border-blue-600 py-4 rounded-xl mb-4"
      >
        <Text className="text-blue-600 text-center font-semibold">
          Create Account
        </Text>
      </Pressable>

      {/* Guest */}
      <Pressable onPress={handleGuest}>
        <Text className="text-center text-gray-500 mt-4">
          Continue as Guest
        </Text>
      </Pressable>
    </View>
  );
}