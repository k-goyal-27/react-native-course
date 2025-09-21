import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#000", tabBarActiveBackgroundColor: "#c2e6fd" }}>
      <FontAwesome name="home" size={24} color="black" />
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <AntDesign name="home" size={24} color="black" />
            ) : (
              <FontAwesome name="home" size={24} color={color} />
            );
          },
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          title: "Login",
          tabBarIcon: ({ color }) => <AntDesign name="login" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
