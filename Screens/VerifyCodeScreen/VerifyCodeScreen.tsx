import { Appbar, TextInput } from "react-native-paper";
import { g_style } from "../../styles/styles.js";
import { Text, View } from "react-native";
import { ForgotPwdSvg } from "../../assets/svg";
import { style } from "./style.js";
import BottomButton from "../../components/BottomButton";
const VerifyCodeScreen = (props) => {
  const { navigation } = props;

  return (
    <>
      <Appbar.Header mode="large" style={{ backgroundColor: "white" }}>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content
          title={<Text style={g_style.page_title}>Verification Code</Text>}
          style={{ alignItems: "center" }}
        />
      </Appbar.Header>
      <View
        style={{
          flex: 2,
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "white",
          padding: 30,
        }}
      >
        <ForgotPwdSvg />
      </View>
      <View style={style.container_input}>
        <TextInput mode="outlined" style={style.digit_input} />
        <TextInput mode="outlined" style={style.digit_input} />
        <TextInput mode="outlined" style={style.digit_input} />
        <TextInput mode="outlined" style={style.digit_input} />
      </View>
      <View style={style.container_bottom}>
        <Text style={g_style.page_subtitle}>
          00:20 resend confirmation code.
        </Text>
        <BottomButton buttonText="Confirm Code" />
      </View>
    </>
  );
};

export default VerifyCodeScreen;
