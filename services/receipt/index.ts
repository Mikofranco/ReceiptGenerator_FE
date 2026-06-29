import HttpService from "../httpService";
import {ROUTES} from "../apiRoutes"
import { Alert } from "react-native";
import { router } from "expo-router";
const API_URL = process.env.EXPO_PUBLIC_API_URL || "http://localhost:8080";
const http = new HttpService();

export const getReceiptById = async (id: string) => {
  try {
    const response = await http.getData(
      ROUTES.getSingleReceipt(id),
    );
    // const res = await fetch(`${API_URL}${ROUTES.getSingleReceipt(id)}`, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
   
  } catch (error: any) {
    console.log(error.message);
  }
};

export const getReceipt = async (userId: string) => {
  try {
    const response = await http.getData(
      ROUTES.getReceipt(userId),
    );
    // const res = await fetch(`${API_URL}${ROUTES.getReceipt(userId)}`, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    
  } catch (error: any) {
    console.log(error.message);
  }
};

