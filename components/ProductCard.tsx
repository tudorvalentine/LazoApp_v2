import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { HeartSvg } from "../assets/svg";
import { TouchableRipple } from "react-native-paper";

const ProductCard = ({ onPress }) => {
  return (
    <TouchableRipple style={styles.container} onPress={onPress}>
      <View>
        <Pressable style={styles.favorite}>
          <HeartSvg />
        </Pressable>
        <Image
          style={styles.cardCover}
          source={require("../assets/img/batnik.png")}
        />
        <View>
          <Text style={styles.cardTitle}>Nike Sportswear Club Fleece</Text>
          <Text style={styles.priceProd}>$99</Text>
        </View>
      </View>
    </TouchableRipple>
  );
};
const styles = StyleSheet.create({
  container: {
    //backgroundColor: "aqua",
    justifyContent: "space-between",
    flexDirection: "column",
    width: "45%",
  },
  cardCover: {
    width: "100%",
    height: 250,
    borderRadius: 20,
  },
  favorite: {
    position: "absolute",
    zIndex: 1,
    right: "10%",
    top: "5%",
  },
  cardTitle: {
    fontFamily: "ir-regular",
    fontSize: 13,
    paddingTop: 10,
    paddingBottom: 5,
  },
  priceProd: {
    fontFamily: "ir-bold",
    fontSize: 15,
  },
});
export default ProductCard;
