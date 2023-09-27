import React from "react";
import { SafeAreaView, Text, View, Image, ScrollView } from "react-native";
import useScreenHeader from "../../hooks/useScreenHeader";
import SectionHead from "../../components/SectionHead/SectionHead";
import styles from "./styles";
import { g_style } from "../../styles/styles";
import SectionTitle from "../../components/SectionHead/SectionTitle";
import SizeSuface from "../../components/SizeSuface";
import Subtitle from "../../components/Subtitle";
import TemplateReview from "../../components/TemplateReview";

const ProductDetailsScreen = ({ navigation }) => {
  useScreenHeader({
    headerTransparent: true,
    hasLeftArrow: true,
    hasRight: true,
  });

  return (
    <>
      <SafeAreaView style={styles.AndroidSafeArea}>
        <Image
          style={styles.image}
          source={require("../../assets/img/batnik.png")}
        />
      </SafeAreaView>
      <ScrollView style={styles.descriptionContainer}>
        <View style={styles.descriptionHeader}>
          <Text style={styles.descriptionLabels}>
            Men's Printed Pullover Hoodie
          </Text>
          <Text style={styles.descriptionLabels}>Price</Text>
        </View>
        <View style={styles.descriptionHeader}>
          <Text style={g_style.page_title}>Nike Club Fleece</Text>
          <Text style={g_style.page_title}>120 $</Text>
        </View>
        <View style={styles.overviewContainer}>
          <Image
            style={styles.overviewCard}
            source={require("../../assets/img/back.png")}
          />
          <Image
            style={styles.overviewCard}
            source={require("../../assets/img/front.png")}
          />
          <Image
            style={styles.overviewCard}
            source={require("../../assets/img/front2.png")}
          />
          <Image
            style={styles.overviewCard}
            source={require("../../assets/img/pocket.png")}
          />
        </View>
        <SectionHead
          title="Size"
          titleOfAction="Size Guide"
          onPressAction={() => {}}
        />
        <View style={styles.sizeContainer}>
          <SizeSuface size="S" />
          <SizeSuface size="M" />
          <SizeSuface size="L" />
          <SizeSuface size="XL" />
          <SizeSuface size="2XL" />
        </View>
        <SectionTitle text="Description" />
        <Subtitle subtitleText="The Nike Throwback Pullover Hoodie is made from premium French terry fabric that blends a performance feel with Read More.." />
        <SectionHead
          title="Reviews"
          titleOfAction="View All"
          onPressAction={() => {}}
        />
        <TemplateReview
          authorName="Tudor Popescu"
          ratingValue={4.8}
          reviewText="Lorem sdfsfdsfsfsf"
        />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <View>
            <Text style={styles.price}>Total Price</Text>
            <Subtitle subtitleText="with VAT, SD" />
          </View>
          <Text style={styles.price}> $125 </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default ProductDetailsScreen;
