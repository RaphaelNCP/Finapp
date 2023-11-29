import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Add } from "../Pages/Add";
import { Home } from "../Pages/Home/Index";
import { Right } from "../Pages/Right";
import { Feather } from "@expo/vector-icons";

const { Navigator, Screen } = createBottomTabNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          tabBarActiveTintColor: "#D6CDA4",
          tabBarInactiveTintColor: "#EEF2E6",
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "#EEF2E6",
            fontSize: 20,
            fontWeight: "bold",
          },
          headerStyle: {
            backgroundColor: "#1C6758",
            borderTopColor: "transparent",
          },
          tabBarStyle: {
            backgroundColor: "#1C6758",
            borderTopColor: "transparent",
            paddingBottom: 8,
            paddingTop: 8,
            height: 70,
          },
          tabBarLabelStyle: {
            fontSize: 14,
            paddingBottom: 8,
          },
        }}
      >
        <Screen
          name="Principal"
          component={Home}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Feather name="home" size={size} color={color} />
            ),
          }}
        />
        <Screen
          name="Adicionar"
          component={Add}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Feather name="plus" size={size} color={color} />
            ),
          }}
        />
        <Screen
          name="Histórico"
          component={Right}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Feather name="repeat" size={size} color={color} />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};
