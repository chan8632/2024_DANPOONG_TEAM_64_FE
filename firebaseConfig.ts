import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2eubgx7shZmmPtp08qnowCcM5jIibnaw",
  authDomain: "daily-stock-prediction.firebaseapp.com",
  projectId: "daily-stock-prediction",
  storageBucket: "daily-stock-prediction.firebasestorage.com",
  messagingSenderId: "493429099406",
  appId: "1:493429099406:web:4bc7e56a8cbf747a31b2df",
  measurementId: "G-1MDY8G7YTX", // 생략 가능
};

const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Firebase 인증 초기화
export const auth = getAuth(app);
