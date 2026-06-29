import { ScrollView, View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { getReceipt } from "@/services/receipt";
import { useEffect } from "react";

const stats = [
  { title: "Receipts", value: "124" },
  { title: "Revenue", value: "₦1,250,000" },
  { title: "Customers", value: "58" },
  { title: "This Month", value: "21" },
];

const recentReceipts = [
  {
    id: "1",
    customerName: "John Doe",
    amount: "₦25,000",
    format: "Invoice",
  },
  {
    id: "2",
    customerName: "Sarah Johnson",
    amount: "₦12,500",
    format: "Standard",
  },
];

export default function DashboardScreen() {
  const router = useRouter();
  const fetchedID =localStorage.getItem("userId")


  if(fetchedID)
   getReceipt(fetchedID)

  return (
    <ScrollView className="flex-1 bg-gray-100">
      <View className="px-6 pt-16">
        <Text className="text-3xl font-bold">
          Welcome Back 👋
        </Text>

        <Text className="text-gray-500 mt-1">
          Manage your receipts and customers
        </Text>

        {/* Stats */}
        <View className="flex-row flex-wrap justify-between mt-8">
          {stats.map((stat) => (
            <View
              key={stat.title}
              className="bg-white rounded-2xl p-5 mb-4 w-[48%]"
            >
              <Text className="text-gray-500">
                {stat.title}
              </Text>

              <Text className="text-2xl font-bold mt-2">
                {stat.value}
              </Text>
            </View>
          ))}
        </View>

        {/* Actions */}
        <Text className="text-xl font-semibold mt-4 mb-3">
          Quick Actions
        </Text>

        <Pressable
          onPress={() => router.push("/receipt/create")}
          className="bg-blue-600 p-4 rounded-xl mb-3"
        >
          <Text className="text-white text-center font-semibold">
            Create Receipt
          </Text>
        </Pressable>

        <Pressable
          className="bg-white p-4 rounded-xl mb-3"
        >
          <Text className="text-center">
            Download Report
          </Text>
        </Pressable>

        {/* Recent Receipts */}
        <Text className="text-xl font-semibold mt-6 mb-3">
          Recent Receipts
        </Text>

        {recentReceipts.map((receipt) => (
          <View
            key={receipt.id}
            className="bg-white p-4 rounded-xl mb-3"
          >
            <Text className="font-semibold text-lg">
              {receipt.customerName}
            </Text>

            <Text className="text-green-600 font-bold mt-1">
              {receipt.amount}
            </Text>

            <Text className="text-gray-500 mt-1">
              {receipt.format}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}