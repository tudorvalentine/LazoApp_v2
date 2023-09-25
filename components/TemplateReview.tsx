import { View, StyleSheet, Image, Text } from "react-native";
import { TimeIcoSvg, StarsSvg } from "../assets/svg";

interface CustomStyle {
  style?: Object;
}

const TemplateReview = ({ style }: CustomStyle) => {
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
            <Text style={styles.authorName}>Jenny Wilson</Text>
            <View style={styles.containerTime}>
              <TimeIcoSvg />
              <Text style={styles.postTime}>13 Sep, 2020</Text>
            </View>
          </View>
        </View>
        <View>
          <Text>248 Reviews</Text>
          <View style={styles.averageRev}>
            <Text>4.8</Text>
            <StarsSvg />
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.textReview}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nisi
          necessitatibus, libero rem quis accusantium ut, molestias odio numquam
          praesentium distinctio qui alias perspiciatis harum est maxime iste!
          Nemo, accusantium.
        </Text>
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
