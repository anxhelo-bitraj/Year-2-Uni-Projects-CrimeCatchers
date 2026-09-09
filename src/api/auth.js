import axios from "axios";

const API_URL = "/api/auth";

export async function login(email, password) {
  try {
    const res = await axios.post(`${API_URL}/login`, { email, password });
    const { token, user } = res.data;
    return { success: true, user, token };
  } catch (err) {
    return { success: false, message: err.response?.data || "Login failed" };
  }
}

export async function signup({ firstName, lastName, phone, address, email, password }) {
  try {
    const res = await axios.post(`${API_URL}/signup`, { firstName, lastName, phone, address, email, password });
    return { success: true, message: res.data };
  } catch (err) {
    return { success: false, message: err.response?.data || "Signup failed" };
  }
}
