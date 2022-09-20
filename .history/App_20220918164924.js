import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function ScreenA(){
  return(
    <View>
      <Text>
        Screen A
      </Text>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Screen_A"
        component={ ScreenA }
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = 