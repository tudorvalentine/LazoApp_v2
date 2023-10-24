import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";

import { useEffect } from "react";

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
import { useGetBrandsQuery } from "../../redux/api/lazoApi";
import { useLoginMutation } from "../../redux/api/authApi";
import { isLoading } from "expo-font";
import { useDispatch } from "react-redux";
import { setTokens } from "../../redux/slices/authSlice";
const Home = (props) => {
  const navigation = useNavigation();
  useScreenHeader({
    hasLeftMenu: true,
    hasRight: true,
    headerStyle: {
      height: 130,
    },
  });
  // const [login, { isLoading: loginLoading, isError: loginError }] =
  //   useLoginMutation();

  // const handleLogin = async () => {
  //   const resp = await login({
  //     username: "tudor",
  //     password: "popesKu1903",
  //   }).unwrap();
  //   return resp;
  // };
  // const dispatch = useDispatch();
  // const {
  //   data: brands,
  //   isLoading: brandsLoading,
  //   isError: brandsError,
  // } = useGetBrandsQuery();

  // useEffect(() => {
  //   const res = handleLogin();
  //   res
  //     .then((response) => {
  //       const accessT = response.access_token;
  //       const refreshT = response.refresh_token;
  //       console.log("accessT", accessT);
  //       console.log("refreshT", refreshT);
  //       dispatch(setTokens({ accessToken: accessT, refreshToken: refreshT }));

  //       console.log("brands", brands);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

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
