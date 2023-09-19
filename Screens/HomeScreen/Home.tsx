import { View, Text } from "react-native";
import React from "react";
const Home = (props) => {
  const { navigation } = props;
  React.useLayoutEffect(() => {
    navigation.setOptions({});
  }, []);
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
