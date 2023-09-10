import { Appbar, Button, TextInput, Switch } from "react-native-paper";
import { View, Text } from "react-native";
import { useState } from "react";
import { g_style } from "../styles/styles";
import axios from "axios";
import BottomButton from "./BottomButton";

export default function LoginScreen({ navigation }) {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const clickLogin = () => {
    axios
      .post("http://192.168.8.119:80/api/login.php", {
        username: username,
        password: password,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  };

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
          <Button textColor="red">Forgot password?</Button>
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
        <BottomButton buttonText="Login" />
      </View>
    </>
  );
}
