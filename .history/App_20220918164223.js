import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function ScreenA(){
  return(
    <View>
      <Text>
        Screen A
      </Text>
    </View>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name='Screen_A'
        component={ ScreenA }/>
      </Stack.Navigator>
    </NavigationContainer>>
  )
}
