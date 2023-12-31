import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";
import {
  AdidasSvg,
  FilaSvg,
  NikeSvg,
  PumaSvg,
  SearchSvg,
} from "../../assets/svg";
import CustomInput from "../../components/CustomInput";
import BrandItem from "../../components/BrandItem";
import SectionHead from "../../components/SectionHead/SectionHead";
import ProductCard from "../../components/ProductCard";
import useScreenHeader from "../../hooks/useScreenHeader";
import { useNavigation } from "@react-navigation/native";
import { useGetProductsQuery } from "../../redux/api/lazo/lazo.api";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectCurrentAccessToken,
  selectCurrentRefreshToken,
} from "../../redux/slices/auth.slice";
const Home = () => {
  const navigation = useNavigation();
  useScreenHeader({
    hasLeftMenu: true,
    hasRight: true,
    headerStyle: {
      height: 130,
    },
  });

  const { data: products, isLoading } = useGetProductsQuery({
    offset: 0,
    limmit: 10,
  });
  const tokA = useSelector(selectCurrentAccessToken);
  const tokR = useSelector(selectCurrentRefreshToken);
  useEffect(() => {
    console.log("Products", products);
    console.log("Token a", tokA);
    console.log("Token r", tokR);
  }, []);
  const data = [
    { id: "1", text: "Adidas", icon: <AdidasSvg /> },
    { id: "2", text: "Nike", icon: <NikeSvg /> },
    { id: "3", text: "Fila", icon: <FilaSvg /> },
    { id: "4", text: "Puma", icon: <PumaSvg /> },
    // Add more items as needed
  ];
  const renderItem = ({ item }) => (
    <BrandItem icon={item.icon} brand={item.text} />
  );
  return (
    <View style={style.container}>
      <View>
        <Title titleText="Hello" />
        <Subtitle subtitleText="Welcome to Laza" />
      </View>
      <View>
        <CustomInput placeholder="Search..." icon={<SearchSvg />} />
      </View>
      <SectionHead
        title="Choose Brand"
        titleOfAction="View All"
        onPressAction={() => {
          console.log("View all was pressed.");
        }}
      />
      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false} // Optional: Hide the horizontal scrollbar
        />
      </View>

      <SectionHead
        title="New Arraival"
        titleOfAction="View All"
        onPressAction={() => {
          console.log("View all was pressed.");
        }}
      />
      <View>
        <ProductCard
          onPress={() => {
            navigation.navigate("ProductDetailsScreen");
          }}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    flex: 1,
    backgroundColor: "white",
  },
});
export default Home;
