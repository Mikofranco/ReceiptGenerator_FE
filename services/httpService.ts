import { getAccessToken } from "@/utils";
import axios, { AxiosResponse, AxiosError } from "axios";

interface BaseUrls {
  [key: string]: string;
  BASE_URL: string;
}

class HttpService {
  private baseUrl: BaseUrls;

  constructor() {
    this.baseUrl = {
      BASE_URL: process.env.EXPO_PUBLIC_API_URL || "",
      // Add other service URLs here if needed
      // AUTH_URL: process.env.EXPO_PUBLIC_AUTH_URL || "",
    };
  }

  private getAuthHeader() {
    const token = getAccessToken();
    return token ? { Authorization: `Bearer ${token}` } : {};
  }

  // ==================== POST ====================
  postData = async <T = any>(
    payload: any,
    url: string,
    service: keyof BaseUrls = "BASE_URL"
  ): Promise<AxiosResponse<T>> => {
    return axios.post(`${this.baseUrl[service]}${url}`, payload, {
      headers: this.getAuthHeader(),
    });
  };

  postDataWithoutToken = async <T = any>(
    payload: any,
    url: string,
    service: keyof BaseUrls = "BASE_URL"
  ): Promise<AxiosResponse<T>> => {
    return axios.post(`${this.baseUrl[service]}${url}`, payload);
  };

  // ==================== GET ====================
  getData = async <T = any>(
    url: string,
    service: keyof BaseUrls = "BASE_URL"
  ): Promise<AxiosResponse<T>> => {
    return axios.get(`${this.baseUrl[service]}${url}`, {
      headers: this.getAuthHeader(),
    });
  };

  getDataWithoutToken = async <T = any>(
    url: string,
    service: keyof BaseUrls = "BASE_URL"
  ): Promise<AxiosResponse<T>> => {
    return axios.get(`${this.baseUrl[service]}${url}`);
  };

  // ==================== PUT ====================
  putData = async <T = any>(
    formData: any,
    url: string,
    service: keyof BaseUrls = "BASE_URL"
  ): Promise<AxiosResponse<T>> => {
    return axios.put(`${this.baseUrl[service]}${url}`, formData, {
      headers: this.getAuthHeader(),
    });
  };

  putDataWithoutToken = async <T = any>(
    formData: any,
    url: string,
    service: keyof BaseUrls = "BASE_URL"
  ): Promise<AxiosResponse<T>> => {
    return axios.put(`${this.baseUrl[service]}${url}`, formData);
  };

  // ==================== PATCH ====================
  patchData = async <T = any>(
    formData: any,
    url: string,
    service: keyof BaseUrls = "BASE_URL"
  ): Promise<AxiosResponse<T>> => {
    return axios.patch(`${this.baseUrl[service]}${url}`, formData, {
      headers: this.getAuthHeader(),
    });
  };

  // ==================== DELETE ====================
  deleteData = async <T = any>(
    url: string,
    service: keyof BaseUrls = "BASE_URL"
  ): Promise<AxiosResponse<T>> => {
    return axios.delete(`${this.baseUrl[service]}${url}`, {
      headers: this.getAuthHeader(),
    });
  };
}

export default HttpService; // Export instance (recommended)