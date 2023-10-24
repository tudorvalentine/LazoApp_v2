import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../Screens/WelcomeScreen/WelcomeScreen";
import GetStarted from "../Screens/GetStartedScreen/GetStarted";
import SignUpScreen from "../Screens/SignUpScreen/SignUpScreen";
import LoginScreen from "../Screens/LoginScreen/LoginScreen";
import NewPwdScreen from "../Screens/NewPassScreen/NewPwdScreen";
import VerifyCodeScreen from "../Screens/VerifyCodeScreen/VerifyCodeScreen";
import ForgotPwdScreen from "../Screens/ResetPwdScreen/ForgotPwdScreen";

const AuthenticationStackScreen = () => {
  const AuthenticationStack = createNativeStackNavigator();
  return (
    <AuthenticationStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthenticationStack.Screen name="Welcome" component={WelcomeScreen} />
      <AuthenticationStack.Screen name="GetStarted" component={GetStarted} />
      <AuthenticationStack.Screen name="SignUp" component={SignUpScreen} />
      <AuthenticationStack.Screen name="Login" component={LoginScreen} />
      <AuthenticationStack.Screen
        name="ForgotPassword"
        component={ForgotPwdScreen}
      />
      <AuthenticationStack.Screen
        name="VerifyCode"
        component={VerifyCodeScreen}
      />
      <AuthenticationStack.Screen name="NewPassword" component={NewPwdScreen} />
    </AuthenticationStack.Navigator>
  );
};

export default AuthenticationStackScreen;
