import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, TabBarIOSItem } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScreenA from "./component/ScreenA";
import ScreenB from "./component/ScreenB";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        // screenOptions={{ header: () => null }}
        screenOptions={({ route }) => ({
          tarBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === "Screen_A") {
              iconName = "autoprefixer";
              size
            } else if (route.name === "Screen_B") {
              iconName = "btc";
            }
            return <FontAwesome5 name={iconName} />;
          },
        })}
      >
        <Tab.Screen name="Screen_A" component={ScreenA} />
        {/* options={{header: () => null}} */}
        <Tab.Screen name="Screen_B" component={ScreenB} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
