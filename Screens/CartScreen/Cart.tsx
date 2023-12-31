import { View, Text, Pressable, Modal, Alert } from "react-native";
import useScreenHeader from "../../hooks/useScreenHeader";
import styles from "./style";
import CartItem from "../../components/CartItem/CartItem";
import { g_style } from "../../styles/styles";
import { LocationSvg, RightArrowSvg, VisaIconSvg } from "../../assets/svg";
import { RadioButton, Surface, Button } from "react-native-paper";
import BottomSheet from "@gorhom/bottom-sheet";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import AddressItemBottomSheet from "../../components/CartScreen/AddressItemBottomSheet";
import { useNavigation } from "@react-navigation/native";

const Cart = () => {
  const navigation = useNavigation();
  // ref
  const addressBottomSheetRef = useRef<BottomSheet>(null);
  const paymentBottomSheetRef = useRef<BottomSheet>(null);
  // Set initial index to hide the bottom sheets

  // variables
  const snapPoints = useMemo(() => ["40%", "70%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);
  useScreenHeader({
    hasLeftArrow: true,
    title: "Cart",
    headerStyle: { height: 120 },
  });

  const [value, setValue] = React.useState("first");

  return (
    <View style={styles.container}>
      <CartItem style={{ marginBottom: 20 }} />
      <CartItem style={{ marginBottom: 20 }} />
      <Pressable
        onPress={() => {
          addressBottomSheetRef.current.expand();
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={g_style.label}>Delivery Address</Text>
          <Pressable style={{ paddingTop: 20 }}>
            <RightArrowSvg />
          </Pressable>
        </View>
        <View style={styles.containerDeliveryPayment}>
          <View>
            <Surface style={styles.deliverySurface}>
              <LocationSvg />
            </Surface>
          </View>
          <View style={{ paddingHorizontal: 15 }}>
            <Text style={styles.textAdress}>Chhatak, Sunamgonj 12/8AB</Text>
            <Text style={styles.textCity}>Sylhet</Text>
          </View>
        </View>
      </Pressable>
      <Pressable
        onPress={() => {
          paymentBottomSheetRef.current.expand();
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={g_style.label}>Payment Method</Text>
          <Pressable style={{ paddingTop: 20 }}>
            <RightArrowSvg />
          </Pressable>
        </View>
        <View style={styles.containerDeliveryPayment}>
          <View>
            <Surface style={styles.deliverySurface}>
              <VisaIconSvg color="#3D93F8" />
            </Surface>
          </View>
          <View style={{ paddingHorizontal: 15 }}>
            <Text style={styles.textAdress}>Visa Classic</Text>
            <Text style={styles.textCity}>**** 7690</Text>
          </View>
        </View>
      </Pressable>
      <View>
        <Text style={g_style.label}>Order Info</Text>
        <View style={styles.totalsContainer}>
          <Text style={g_style.page_subtitle}>Subtotal</Text>
          <Text style={g_style.price}>$110</Text>
        </View>
        <View style={styles.totalsContainer}>
          <Text style={g_style.page_subtitle}>Shipping cost</Text>
          <Text style={g_style.price}>$10</Text>
        </View>
        <View style={styles.totalsContainer}>
          <Text style={g_style.page_subtitle}>Total</Text>
          <Text style={g_style.price}>$120</Text>
        </View>
      </View>
      <BottomSheet
        ref={addressBottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
      >
        <View style={styles.headerBottomSheet}>
          <Text style={[g_style.page_title, { textAlign: "center" }]}>
            Address List
          </Text>
          <Button
            mode="contained"
            buttonColor="#9775FA"
            style={{ borderRadius: 10 }}
            onPress={() => {
              navigation.navigate("AddNewAddress");
            }}
          >
            New Address
          </Button>
        </View>
        <View>
          <RadioButton.Group
            value={value}
            onValueChange={(newValue) => setValue(newValue)}
          >
            <AddressItemBottomSheet />
            <AddressItemBottomSheet />
          </RadioButton.Group>
        </View>
      </BottomSheet>
      <BottomSheet
        ref={paymentBottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
      >
        <View style={styles.headerBottomSheet}>
          <Text style={g_style.page_title}>Cards List</Text>
          <Button
            mode="contained"
            buttonColor="#9775FA"
            style={{ borderRadius: 10 }}
            onPress={() => {
              navigation.navigate("AddNewCardScreen");
            }}
          >
            Add Card
          </Button>
        </View>
      </BottomSheet>
    </View>
  );
};

export default Cart;
