import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function ScreenA({ navigation }) {
  const onPressHandler = () => {
    navigation.navigate("Screen_B");
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen A</Text>
      <Pressable
        onPress={onPressHandler}
        style={({ pressed }) => ({
          backgroundColor: pressed ? "#ddd" : "#0f0",
        })}
      >
        <Text style={styles.text}>Go to the Screen B</Text>
      </Pressable>
    </View>
  );
}

function ScreenB() {
  const onPressHandler =({navigation}) => {
    navigation.navigate
  }
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen B</Text>
      <Pressable onPress={onPressHandler}>
        style=
        {({ pressed }) => ({
          backgroundColor: pressed ? "#ddd" : "black",
        })}
        <Text>Go back Screen A</Text>
      </Pressable>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen_A" component={ScreenA} />
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
