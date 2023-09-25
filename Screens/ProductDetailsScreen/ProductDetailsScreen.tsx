import { useNavigation } from "@react-navigation/native";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  StyleSheet,
  StatusBar,
  Platform,
} from "react-native";
import useScreenHeader from "../../hooks/useScreenHeader";
import SectionHead from "../../components/SectionHead/SectionHead";
import styles from "./styles";

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
      <View style={{ paddingRight: 15, paddingStart: 15 }}>
        <SectionHead
          title="Reviews"
          titleOfAction="View All"
          onPressAction={() => {
            navigation.navigate("ReviewsScreen");
          }}
        />
      </View>
    </>
  );
};

export default ProductDetailsScreen;
