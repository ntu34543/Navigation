import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";

function ScreenB({ navigation }) {
    const onPressHandler = () => {
      navigation.navigate("Screen_A");
      // navigation.goBack();
    };
    return (
      <View style={styles.body}>
        <Text style={styles.text}>Screen B</Text>
        <Pressable
          onPress={onPressHandler}
          style={({ pressed }) => ({
            backgroundColor: pressed ? "#ddd" : "white",
          })}
        >
          <Text style={styles.text}>Go back Screen A</Text>
        </Pressable>
      </View>
    );
  }