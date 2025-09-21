import { Stack } from "expo-router";

//shared I elements like headers or footers can be added here
export default function RootLayout() {
  return (
    // <View style={{ flex: 1 }}>
    //   {/* Shared header/footer */}
    //   <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //     <Text>Hello, shared elements like headers or footers can be added here</Text>
    //   </View>

    //   {/* Stack for navigation */}
    //   <Stack />
    // </View>
    <Stack>
      {/* <Stack.Screen
        name="index"
        options={{
          headerTitle: "Home",
          headerStyle: { backgroundColor: "#c2e6fd" },
          headerTintColor: "#202020",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          headerTitle: "Login",
          headerStyle: { backgroundColor: "#1e90ff" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      /> */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
