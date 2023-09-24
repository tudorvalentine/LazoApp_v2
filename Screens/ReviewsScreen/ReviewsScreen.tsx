import { View, Text, StyleSheet } from "react-native";
import useScreenHeader from "../../hooks/useScreenHeader";
import styles from "./styles";
import { AddReviewIconSvg, StarsSvg } from "../../assets/svg";
import { Button } from "react-native-paper";
const ReviewsScreen = () => {
  useScreenHeader({
    title: "Reviews",
    hasLeftArrow: true,
    headerStyle: { height: 120 },
  });
  return (
    <View style={styles.container}>
      <View style={styles.addReviewSect}>
        <View>
          <Text>248 Reviews</Text>
          <View style={styles.averageRev}>
            <Text>4.8</Text>
            <StarsSvg />
          </View>
        </View>
        <View>
          <Button
            mode="contained"
            buttonColor="#FF7043"
            style={styles.btnAddRev}
            icon={}
          >
            Add Review
          </Button>
        </View>
      </View>
    </View>
  );
};

export default ReviewsScreen;
