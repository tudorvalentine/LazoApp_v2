import { Text, View } from "react-native";
import React from "react";
import useScreenHeader from "../../hooks/useScreenHeader";
import styles from "./style";
import ProductCard from "../../components/ProductCard";
import { g_style } from "../../styles/styles";
import { Button } from "react-native-paper";
import { SortIconSvg } from "../../assets/svg";
const Wishlist = () => {
  useScreenHeader({
    title: "Wishlist",
    hasLeftArrow: true,
    hasRight: true,
    headerStyle: { height: 120 },
  });

  return (
    <View style={styles.container}>
      <View style={styles.sortSection}>
        <Text style={g_style.label}> 1 Items</Text>
        <Button
          style={{ marginTop: 20, borderRadius: 10 }}
          textColor="#1D1E20"
          icon={() => <SortIconSvg />}
          buttonColor="#F5F6FA"
          onPress={() => {}}
        >
          Sort
        </Button>
      </View>
      <View style={{ paddingTop: 20 }}>
        <ProductCard onPress={() => {}} />
      </View>
    </View>
  );
};

export default Wishlist;
