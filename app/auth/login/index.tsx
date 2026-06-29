import { loginUser } from "@/services/auth";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
// import { useAuthStore } from "../../store/auth.store";

export default function LoginScreen() {
  const router = useRouter();
  // const login = useAuthStore((state) => state.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Email and password are required");
      return;
    }

    setLoading(true);

    try {
      loginUser({ username: email, password });
    } catch (err) {
      Alert.alert("Login Failed", "Check your credentials");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-white px-6 justify-center">
      <Text className="text-3xl font-bold text-blue-600 mb-8 text-center">
        Sign In
      </Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        className="border border-gray-300 p-4 rounded-xl mb-4"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="border border-gray-300 p-4 rounded-xl mb-6"
      />

      <Pressable
        onPress={handleLogin}
        disabled={loading}
        className="bg-blue-600 py-4 rounded-xl"
      >
        <Text className="text-white text-center font-semibold">
          {loading ? "Signing in..." : "Sign In"}
        </Text>
      </Pressable>

      <Pressable onPress={() => router.push("/auth/register")}>
        <Text className="text-center text-gray-500 mt-6">
          Don’t have an account? Register
        </Text>
      </Pressable>
    </View>
  );
}
