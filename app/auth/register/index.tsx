import { registerUser } from "@/services/auth";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";

export default function RegisterScreen() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!name || !email || !password) {
      Alert.alert("Error", "All fields are required");
      return;
    }
    setLoading(true);

    try {
      registerUser({ name, username: email, password });
    } catch (err) {
      Alert.alert("Error", "Could not create account");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-white px-6 justify-center">
      <Text className="text-3xl font-bold text-blue-600 mb-8 text-center">
        Create Account
      </Text>

      <TextInput
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
        className="border border-gray-300 p-4 rounded-xl mb-4"
      />

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
        onPress={handleRegister}
        disabled={loading}
        className="bg-blue-600 py-4 rounded-xl"
      >
        <Text className="text-white text-center font-semibold">
          {loading ? "Creating account..." : "Register"}
        </Text>
      </Pressable>

      <Pressable onPress={() => router.push("/auth/login")}>
        <Text className="text-center text-gray-500 mt-6">
          Already have an account? Sign In
        </Text>
      </Pressable>
    </View>
  );
}
