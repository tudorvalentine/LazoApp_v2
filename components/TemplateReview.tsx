import { View, StyleSheet, Image, Text } from "react-native";
import { TimeIcoSvg, StarsSvg } from "../assets/svg";

interface CustomStyle {
  authorName?: string;
  ratingValue?: number;
  reviewText?: string;
  style?: Object;
}

const TemplateReview = ({
  style,
  authorName,
  ratingValue,
  reviewText,
}: CustomStyle) => {
  return (
    <View style={style}>
      <View style={styles.container}>
        <View style={styles.headReview}>
          <View>
            <Image
              style={styles.avatar}
              borderRadius={40}
              source={require("../assets/img/batnik.png")}
              width={50}
              height={50}
            />
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.authorName}>{authorName}</Text>
            <View style={styles.containerTime}>
              <TimeIcoSvg />
              <Text style={styles.postTime}>13 Sep, 2020</Text>
            </View>
          </View>
        </View>
        <View>
          <Text>{ratingValue} rating</Text>
          <StarsSvg />
        </View>
      </View>
      <View>
        <Text style={styles.textReview}>{reviewText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headReview: {
    flexDirection: "row",
  },
  avatar: {
    width: 50,
    height: 50,
  },
  containerTime: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 7,
  },
  authorName: {
    fontSize: 15,
    fontFamily: "ir-semi-bold",
  },
  postTime: {
    fontFamily: "ir-regular",
    fontSize: 11,
    color: "#8F959E",
    marginLeft: 5,
  },
  averageRev: {
    flexDirection: "row",
    alignItems: "center",
  },
  textReview: {
    marginTop: 10,
    color: "#8F959E",
    fontFamily: "ir-regular",
    fontSize: 15,
  },
});
export default TemplateReview;
