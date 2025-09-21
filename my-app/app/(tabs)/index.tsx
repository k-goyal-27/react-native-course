import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.home}>
      <Text>Qwerty</Text>
      <Link href="/login" style={styles.login}>
        Go to Login page
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  login: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#1e90ff",
    borderRadius: 5,
    color: "#fff",
  },
});
