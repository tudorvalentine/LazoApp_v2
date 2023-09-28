import { Surface } from "react-native-paper";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import CounterArrow from "./CounterArrowButton";
import DownArrow from "../../assets/svg/DownArrow";
import DeleteItemButton from "./DeleteItemButton";
import { useState } from "react";

const CartItem = ({ style }) => {
  const [countItem, setCounter] = useState(1);
  return (
    <Surface style={[styles.container, style]}>
      <View style={styles.containerImage}>
        <Image
          style={styles.itemImage}
          source={require("../../assets/img/batnik.png")}
        />
      </View>
      <View style={{ flex: 4 }}>
        <Text style={styles.itemTitle}>
          Men's Tie-Dye T-Shirt Nike Sportswear
        </Text>
        <Text style={styles.itemPrice}> $45 (-$4.00 Tax)</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={styles.counterItem}>
            <TouchableOpacity
              onPress={() => {
                if (countItem > 1) {
                  setCounter(countItem - 1);
                }
              }}
            >
              <CounterArrow arrow={true} />
            </TouchableOpacity>
            <Text style={{ marginRight: 20, marginLeft: 20 }}>{countItem}</Text>
            <TouchableOpacity
              onPress={() => {
                if (countItem < 20) {
                  setCounter(countItem + 1);
                }
              }}
            >
              <CounterArrow arrow={false} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, alignSelf: "flex-end", alignItems: "flex-end" }}>
        <TouchableOpacity>
          <DeleteItemButton />
        </TouchableOpacity>
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
  },
  containerImage: {
    flex: 2.5,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    resizeMode: "contain",
  },
  itemTitle: {
    fontSize: 14,
    fontFamily: "ir-semi-bold",
    marginBottom: 8,
  },
  itemPrice: {
    fontFamily: "ir-regular",
    fontSize: 12,
    color: "#8F959E",
    marginBottom: 10,
  },
  counterItem: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default CartItem;
