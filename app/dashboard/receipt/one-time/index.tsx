import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  ScrollView,
} from "react-native";

type ReceiptFormat = "PDF" | "TEXT" | "EMAIL";
    
export default function CreateReceiptScreen() {
  const [customerName, setCustomerName] = useState("");
  const [description, setDescription] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [discount, setDiscount] = useState("");
  const [receiptFormat, setReceiptFormat] =
    useState<ReceiptFormat>("PDF");

  const handleSubmit = async () => {
    if (!customerName || !totalAmount) {
      Alert.alert("Error", "Customer name and amount are required");
      return;
    }

    const payload = {
      customerName,
      description,
      totalAmount: parseFloat(totalAmount),
      discount: parseFloat(discount || "0"),
      receiptFormats: receiptFormat,
    };

    try {
      const res = await fetch("http://YOUR_BACKEND_URL/api/receipts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to create receipt");

      const data = await res.json();
      Alert.alert("Success", "Receipt created successfully");
      console.log(data);
    } catch (err) {
      Alert.alert("Error", "Could not create receipt");
      console.error(err);
    }
  };

  return (
    <ScrollView className="flex-1 bg-white px-6 pt-16">
      <Text className="text-2xl font-bold mb-6">
        Create Receipt
      </Text>

      {/* Customer Name */}
      <TextInput
        placeholder="Customer Name"
        value={customerName}
        onChangeText={setCustomerName}
        className="border border-gray-300 rounded-xl p-4 mb-4"
      />

      {/* Description */}
      <TextInput
        placeholder="Description (optional)"
        value={description}
        onChangeText={setDescription}
        className="border border-gray-300 rounded-xl p-4 mb-4"
      />

      {/* Amount */}
      <TextInput
        placeholder="Total Amount"
        value={totalAmount}
        onChangeText={setTotalAmount}
        keyboardType="decimal-pad"
        className="border border-gray-300 rounded-xl p-4 mb-4"
      />

      {/* Discount */}
      <TextInput
        placeholder="Discount (%)"
        value={discount}
        onChangeText={setDiscount}
        keyboardType="decimal-pad"
        className="border border-gray-300 rounded-xl p-4 mb-6"
      />

      {/* Receipt Format Selector */}
      <Text className="mb-2 font-semibold">Receipt Format</Text>

      <View className="flex-row gap-2 mb-6">
        {(["PDF", "TEXT", "EMAIL"] as ReceiptFormat[]).map((format) => (
          <Pressable
            key={format}
            onPress={() => setReceiptFormat(format)}
            className={`px-4 py-2 rounded-xl border ${
              receiptFormat === format
                ? "bg-blue-600 border-blue-600"
                : "border-gray-300"
            }`}
          >
            <Text
              className={`${
                receiptFormat === format
                  ? "text-white"
                  : "text-gray-700"
              }`}
            >
              {format}
            </Text>
          </Pressable>
        ))}
      </View>

      {/* Submit */}
      <Pressable
        onPress={handleSubmit}
        className="bg-blue-600 py-4 rounded-xl"
      >
        <Text className="text-white text-center font-semibold">
          Create Receipt
        </Text>
      </Pressable>
    </ScrollView>
  );
}