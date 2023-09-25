import CustomInput from "../../components/CustomInput";
import useScreenHeader from "../../hooks/useScreenHeader";
import Slider from "@react-native-community/slider";
import { View, Text } from "react-native";
import BottomButton from "../../components/BottomButton";
import styles from "./style";
const AddReviewScreen = () => {
  useScreenHeader({
    hasLeftArrow: true,
    title: "Add Review",
  });
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <CustomInput placeholder="Type your name" />
      <Text style={styles.label}>How was your experience ?</Text>
      <CustomInput
        placeholder="Describe your experience?"
        multiline={true}
        numberOfLines={10}
      />
      <Text style={styles.label}>Star</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text> 1</Text>
        <Slider
          style={{ width: "90%", height: 50 }}
          minimumValue={1}
          maximumValue={5}
          minimumTrackTintColor="#9775FA"
          maximumTrackTintColor="#9775FA"
          thumbTintColor="#9775FA"
          step={1}
        />
        <Text> 5</Text>
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end", paddingBottom: 20 }}>
        <BottomButton buttonText="Submit Review" onPress={() => {}} />
      </View>
    </View>
  );
};

export default AddReviewScreen;
