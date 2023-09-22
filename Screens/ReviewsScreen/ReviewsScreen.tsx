import { View, Text, StyleSheet } from "react-native";
import useScreenHeader from "../../hooks/useScreenHeader";
import { useNavigation } from "@react-navigation/native";
const ReviewsScreen = () => {
  const navigation = useNavigation();
  navigation.setOptions({
    headerShown: false,
  });
  useScreenHeader({
    title: "Reviews",
    hasLeftArrow: true,
    headerTitleAlign: "center",
    headerTitleStyle: { fontSize: 17, fontFamily: "ir-bold", color: "#1D1E20" },
  });
  return (
    <View>
      <Text>Screen Content</Text>
    </View>
  );
};

export default ReviewsScreen;
