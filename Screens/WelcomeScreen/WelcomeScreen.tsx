import { View } from "react-native";
import { StyleSheet, Image, Text } from "react-native";
import { Surface, Button } from "react-native-paper";

export default function WelcomeScreen({ navigation }) {
  return (
    <>
      <Image
        source={require("../assets/img/Screen_1.png")}
        style={{ width: "100%", height: "100%" }}
      />
      <Surface
        style={styles.welcome_card}
        elevation={5}
        theme={{ colors: { primary: "green" } }}
      >
        <Text
          style={{
            fontFamily: "ir-bold",
            fontSize: 25,
            letterSpacing: -0.187,
            textAlign: "center",
            paddingBottom: 10,
          }}
        >
          Look Good, Feel Good
        </Text>
        <Text
          style={{
            fontFamily: "ir-light",
            fontSize: 15,
            color: "#8F959E",
            textAlign: "center",
          }}
        >
          Create your individual & unique style and look amazing everyday.
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <Button
            onPress={() => {
              navigation.navigate("GetStarted");
            }}
            style={{
              borderRadius: 10,
              marginRight: 15,
              width: 120,
            }}
            mode="contained"
            buttonColor="#9775FA"
          >
            <Text style={{ padding: 7 }}>Men</Text>
          </Button>
          <Button
            onPress={() => {
              navigation.navigate("GetStarted");
            }}
            style={{ borderRadius: 10, width: 120 }}
            mode="contained"
            buttonColor="#9775FA"
          >
            <Text style={{ paddingTop: 7, paddingBottom: 7 }}>Women</Text>
          </Button>
        </View>
        <View style={{ alignItems: "center", marginTop: 5 }}>
          <Button
            style={{ width: "20%" }}
            textColor="#8F959E"
            onPress={() => {
              navigation.navigate("GetStarted");
            }}
          >
            Skip
          </Button>
        </View>
      </Surface>
    </>
  );
}

const styles = StyleSheet.create({
  welcome_card: {
    position: "absolute",
    bottom: "1%",
    borderRadius: 20,
    padding: 15,
    width: "80%",
    left: "10%",
  },
});
