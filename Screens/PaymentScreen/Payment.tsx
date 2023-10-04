import { View, Text, FlatList, Dimensions, Animated } from "react-native";
import useScreenHeader from "../../hooks/useScreenHeader";
import styles from "./styles";
import PaymentCard from "../../components/PaymentCard";
import { useRef } from "react";
import { Button } from "react-native-paper";
import { AddCardIconBtnSvg } from "../../assets/svg";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("screen");
const SPACING = 30;
const CARD_HEIGHT = 210;
const DATA = [
  {
    id: 1,
    owner: "Popescu Tudor",
    cardNum: "5632 2563 5935 2635",
  },
  {
    id: 2,
    owner: "Cumatru Delfin",
    cardNum: "4943 3489 5481 0144",
  },
  {
    id: 3,
    owner: "Leigha Mayoral",
    cardNum: "4567 0422 5689 1796",
  },
];
const Payment = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  useScreenHeader({
    hasLeftArrow: true,
    title: "Payment",
    headerStyle: { height: 120 },
  });
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Animated.FlatList
          horizontal
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ])}
          data={DATA}
          style={{ flexGrow: 0 }}
          pagingEnabled
          bounces={false}
          contentContainerStyle={{
            height: CARD_HEIGHT + SPACING * 2,
          }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            const inputRange = [
              (index - 1) * width,
              index * width,
              (index + 1) * width,
            ];
            const opacity = scrollX.interpolate({
              inputRange,
              outputRange: [0, 1, 0],
            });

            const translateY = scrollX.interpolate({
              inputRange,
              outputRange: [50, 0, 20],
            });
            return (
              <Animated.View
                style={{
                  width,
                  paddingHorizontal: SPACING,
                  transform: [{ translateY }],
                }}
              >
                <PaymentCard
                  owner={item.owner}
                  cardNumber={item.cardNum}
                  style={{ opacity }}
                />
              </Animated.View>
            );
          }}
        />
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <Button
          style={{ borderRadius: 10, height: 50, justifyContent: "center" }}
          buttonColor="#F6F2FF"
          icon={() => <AddCardIconBtnSvg />}
          mode="outlined"
          onPress={() => {
            navigation.navigate("AddNewCardScreen");
          }}
        >
          <Text
            style={{ fontSize: 17, fontFamily: "ir-regular", color: "#9775FA" }}
          >
            Add new card
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default Payment;
