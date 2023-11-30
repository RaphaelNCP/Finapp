import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Toast from "react-native-toast-message";

import { Routes } from "./src/routes";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <Routes />
      <Toast />
    </>
  );
}
