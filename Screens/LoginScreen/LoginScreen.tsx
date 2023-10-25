import { Appbar, Button, TextInput, Switch } from "react-native-paper";
import { View, Text } from "react-native";
import { useState } from "react";
import { g_style } from "../../styles/styles";
import BottomButton from "../../components/BottomButton";
import { useLoginMutation } from "../../redux/api/auth/auth.api";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentAccessToken,
  setTokens,
} from "../../redux/slices/auth.slice";
export default function LoginScreen({ navigation }) {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading: loginLoading, isError: loginError }] =
    useLoginMutation();

  const handleLogin = async () => {
    const res = await login({
      username: username,
      password: password,
    }).unwrap();
    return res;
  };
  const dispatch = useDispatch();
  const handleClickLogin = () => {
    const resp = handleLogin();
    resp
      .then((response) => {
        console.log("username : ", username);
        console.log("password : ", password);

        const accessT = response.access_token;
        const refreshT = response.refresh_token;
        dispatch(setTokens({ accessToken: accessT, refreshToken: refreshT }));
      })
      .catch((e) => {
        console.log("err > ", e);
      });
  };
  console.log("tok", useSelector(selectCurrentAccessToken));
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <>
      <Appbar.Header mode="large" style={{ backgroundColor: "white" }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content
          title={
            <View style={{ alignItems: "center" }}>
              <Text style={g_style.page_title}>Welcome</Text>
              <Text style={g_style.page_subtitle}>
                Please enter your data to continue
              </Text>
            </View>
          }
        />
      </Appbar.Header>
      <View
        style={{
          backgroundColor: "white",
          flex: 3,
          justifyContent: "center",
          paddingRight: 50,
          paddingLeft: 50,
        }}
      >
        <View style={{ alignItems: "center", width: "100%" }}>
          <TextInput
            onChangeText={(text) => setUsername(text)}
            value={username}
            mode="outlined"
            label="Username"
            style={{ width: "100%", margin: 10 }}
          />
          <TextInput
            onChangeText={(text) => setPassword(text)}
            value={password}
            style={{ width: "100%", margin: 10 }}
            secureTextEntry={true}
            mode="outlined"
            label="Password"
          />
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Button
            onPress={() => {
              navigation.navigate("ForgotPassword");
            }}
            textColor="red"
          >
            Forgot password?
          </Button>
        </View>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <View style={{ justifyContent: "center" }}>
            <Text>Remember me</Text>
          </View>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        </View>
      </View>
      <View
        style={{
          backgroundColor: "white",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 40,
        }}
      >
        <Text style={{ color: "#8F959E", textAlign: "center" }}>
          By connecting your account confirm that you agree with our Term and
          Condition
        </Text>
        <BottomButton onPress={handleClickLogin} buttonText="Login" />
      </View>
    </>
  );
}
function dispatch(arg0: {
  payload: { accessToken: string; refreshToken: string };
  type: "auth/setTokens";
}) {
  throw new Error("Function not implemented.");
}
