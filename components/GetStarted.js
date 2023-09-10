import { Appbar, Button } from "react-native-paper";
import { Text } from "react-native-paper";
import SocialButton from "./SocialButton";
import GoogleSvg from "../assets/img/google.svg";
import FacebookSvg from "../assets/img/facebook.svg";
import TwitterSvg from "../assets/img/twitter.svg";
import { View } from "react-native";
import { g_style } from "../styles/styles";
import BottomButton from "./BottomButton";

export default function GetStarted({ navigation }) {
  return (
    <>
      <Appbar.Header mode="large" style={{ backgroundColor: "white" }}>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content
          title={<Text style={g_style.page_title}>Let’s Get Started</Text>}
          style={{ alignItems: "center" }}
        />
      </Appbar.Header>
      <View
        style={{
          flex: 3,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <SocialButton
          color={"#4267B2"}
          text={"Facebook"}
          icon={() => <FacebookSvg width={24} height={24} />}
        />
        <SocialButton
          color={"#1DA1F2"}
          text={"Twitter"}
          icon={() => <TwitterSvg width={24} height={24} />}
        />
        <SocialButton
          color={"#EA4335"}
          text={"Google"}
          icon={() => <GoogleSvg width={24} height={24} />}
        />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "baseline" }}>
          <Text
            style={{ color: "#8F959E", fontFamily: "ir-regular", fontSize: 15 }}
          >
            Already have an account?{" "}
          </Text>
          <Button
            onPress={() => {
              navigation.navigate("LoginScreen");
            }}
          >
            <Text
              style={{ fontFamily: "ir-bold", color: "#1D1E20", fontSize: 15 }}
            >
              Signin
            </Text>
          </Button>
        </View>
        <BottomButton
          onPress={() => navigation.navigate("SignUpScreen")}
          buttonText="Create an Account"
        />
      </View>
    </>
  );
}
