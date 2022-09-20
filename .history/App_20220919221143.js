import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ScreenA from "./component/ScreenA";
import ScreenB from "./component/ScreenB";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      // screenOptions={{ header: () => null }}
      >
        <Stack.Screen name="Screen_A" component={ScreenA} />
        {/* options={{header: () => null}} */}
        <Stack.Screen name="Screen_B" component={ScreenB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
