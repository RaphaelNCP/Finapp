import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Routes } from "./src/routes";

const Tab = createBottomTabNavigator();

export default function App() {
  return <Routes />;
}
