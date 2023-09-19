import { Text, Appbar, TextInput } from "react-native-paper";

import { g_style } from "../../styles/styles";
import { View } from "react-native";
import BottomButton from "../../components/BottomButton";

import { ForgotPwdSvg } from "../../assets/svg";

export default function ForgotPwdScreen({ navigation }) {
  return (
    <>
      <Appbar.Header mode="large" style={{ backgroundColor: "white" }}>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content
          title={<Text style={g_style.page_title}>Forgot Password</Text>}
          style={{ alignItems: "center" }}
        />
      </Appbar.Header>
      <View
        style={{
          flex: 3,
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "white",
          padding: 30,
        }}
      >
        <ForgotPwdSvg />
        <TextInput
          //   value={email}
          //   onChangeText={(text) => setEmail(text)}
          mode="outlined"
          label="Email"
          style={{ width: "100%", margin: 10 }}
        />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
          padding: 30,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "#8F959E",
            fontFamily: "ir-regular",
          }}
        >
          Please write your email to receive a confirmation code to set a new
          password.
        </Text>
        <BottomButton
          onPress={() => navigation.navigate("SignUpScreen")}
          buttonText="Confirm Mail"
        />
      </View>
    </>
  );
}
