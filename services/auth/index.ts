import { router } from "expo-router";
import { Alert } from "react-native";
import HttpService from "../httpService";

interface RegisterUser {
  name: string;
  username: string;
  password: string;
}

interface LoginUser {
  username: string;
  password: string;
}

const API_URL = process.env.EXPO_PUBLIC_API_URL || "http://localhost:8080";
const http = new HttpService();

export const registerUser = async ({
  name,
  username,
  password,
}: RegisterUser) => {
  try {
    // const response = await http.postDataWithoutToken(
    //   { name, username, password },
    //   ROUTES.register(),
    // );
    const res = await fetch(`${API_URL}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        username,
        password,
      }),
    });
    Alert.alert("Success", "Account created successfully");

    router.replace("/auth/login");
  } catch (error: any) {
    console.log(error.message);
  }
};

export const loginUser = async ({ username, password }: LoginUser) => {
  try {
    // const response = await http.postDataWithoutToken(
    //   { name, username, password },
    //   ROUTES.login(),
    // );
    const res = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        username,
        password,
      }),
    });
    Alert.alert("Success", "Account created successfully");
    const data: any = await res.json();

    localStorage.setItem("token", data.token);
    localStorage.setItem("refreshToken", data.refreshToken);
    localStorage.setItem("userId", data.userId);
    localStorage.setItem("userName", data.userName);

    console.log("login response", data);

    router.replace("/dashboard");
  } catch (error: any) {
    Alert.alert("Login Failed", "Check your credentials");
    console.log(error.message);
  }
};

export const forgotPassword = async (email: string) => {
  try {
    // const response = await http.postDataWithoutToken(
    //   { name, username, password },
    //   ROUTES.register(),
    // );
    const res = await fetch(`${API_URL}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });
    Alert.alert("Success", "Account created successfully");

    router.replace("/auth/login");
  } catch (error: any) {
    console.log(error.message);
  }
};
