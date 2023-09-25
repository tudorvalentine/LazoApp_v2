import { View, Text, StyleSheet } from "react-native";
import useScreenHeader from "../../hooks/useScreenHeader";
import styles from "./styles";
import { AddReviewIconSvg, StarsSvg } from "../../assets/svg";
import { Button } from "react-native-paper";
import TemplateReview from "../../components/TemplateReview";
import { useNavigation } from "@react-navigation/native";
const ReviewsScreen = () => {
  const naivgation = useNavigation();
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
            icon={() => <AddReviewIconSvg />}
            onPress={() => {
              naivgation.navigate("AddReview");
            }}
          >
            Add Review
          </Button>
        </View>
      </View>
      <TemplateReview style={{ marginTop: 20 }} />
      <TemplateReview style={{ marginTop: 20 }} />
      <TemplateReview style={{ marginTop: 20 }} />
      <TemplateReview style={{ marginTop: 20 }} />
    </View>
  );
};

export default ReviewsScreen;
