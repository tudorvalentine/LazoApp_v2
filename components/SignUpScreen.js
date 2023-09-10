import {
  Appbar,
  TextInput,
  Switch,
  ActivityIndicator,
} from "react-native-paper";
import { View, Text } from "react-native";
import { useState } from "react";

import { g_style } from "../styles/styles";
import BottomButton from "./BottomButton";
import axios from "axios";
import { getJwtToken, saveJwtToken } from "../utils/AuthUtils";

export default function SignUpScreen({ navigation }) {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const registerNewUser = () => {
    setLoading(true);
    axios
      .post("http://192.168.8.119:8080/api/register.php", {
        username: username,
        pass: password,
        email: email,
      })
      .then(function (response) {
        console.log(response.data);
        // if new user is successfully registered
        if (response.data.success) {
          setErrMsg("");

          saveJwtToken(response.data.jwt);
          console.log(getJwtToken);
          navigation.navigate("MainPage");
        } else if (response.data.error_code == "23505") {
          setErrMsg("User with this username or email already exists");
        } else {
          setErrMsg("Unknown error when register. Try later.");
        }
      })
      .catch(function (error) {
        console.log(error);
        setErrMsg("Unknown error when register. Try later.");
      })
      .finally(function () {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  };
  return (
    <>
      {!loading ? (
        <>
          <Appbar.Header mode="large" style={{ backgroundColor: "white" }}>
            <Appbar.BackAction
              onPress={() => {
                navigation.goBack();
              }}
            />
            <Appbar.Content
              title={
                <View style={{ alignItems: "center" }}>
                  <Text style={g_style.page_title}>Sign Up</Text>
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
                value={username}
                onChangeText={(text) => setUsername(text)}
                mode="outlined"
                label="Username"
                style={{ width: "100%", margin: 10 }}
              />
              <TextInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                style={{ width: "100%", margin: 10 }}
                secureTextEntry={true}
                mode="outlined"
                label="Password"
              />
              <TextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                error={true}
                mode="outlined"
                label="Email"
                style={{ width: "100%", margin: 10 }}
              />
            </View>

            <View
              style={{ justifyContent: "space-between", flexDirection: "row" }}
            >
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
            <Text style={g_style.errMsg}>{errMsg}</Text>
            <BottomButton buttonText="Sign Up" onPress={registerNewUser} />
          </View>
        </>
      ) : (
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator
            size={"large"}
            animating={true}
            color={"#9775FA"}
          />
        </View>
      )}
    </>
  );
}
