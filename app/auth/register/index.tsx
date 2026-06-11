import { useState } from "react";
import { View, Text, TextInput, Pressable, Alert } from "react-native";
import { useRouter } from "expo-router";

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
      const res = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (!res.ok) throw new Error("Registration failed");

      Alert.alert("Success", "Account created successfully");

      router.replace("/auth/login");
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