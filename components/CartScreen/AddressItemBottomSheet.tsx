import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { RadioButton, TouchableRipple, Menu } from "react-native-paper";
import { useState } from "react";
import { ThreeDotsSvg } from "../../assets/svg";

interface AddressData {
  name: string;
  countryCity: string;
  telPhone: string;
  addr: string;
  value: string;
}

const AddressItemBottomSheet = () => {
  const [checked, setChecked] = useState("first");
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const openMenu = () => setIsMenuVisible(true);
  const closeMenu = () => setIsMenuVisible(false);
  return (
    <TouchableRipple onPress={() => {}} rippleColor="rgba(151, 117, 250, 0.30)">
      <View style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ paddingRight: 10 }}>
            <RadioButton
              value="first"
              status={checked === "first" ? "checked" : "unchecked"}
              onPress={() => setChecked("first")}
            />
          </View>
          <View>
            <Text style={styles.name}>Popescu Tudor</Text>
            <Text style={styles.addr}>Moldova, Chisinau</Text>
            <Text style={styles.addr}>+373 69852778</Text>
            <Text style={styles.addr}>Chisinau, Sunamgonj 12/8AB</Text>
          </View>
        </View>
        <View>
          <Menu
            visible={isMenuVisible}
            onDismiss={closeMenu}
            anchor={
              <TouchableRipple
                borderless={true}
                style={styles.actionAddress}
                onPress={() => openMenu()}
                rippleColor="rgba(0, 0, 0, .32)"
              >
                <ThreeDotsSvg />
              </TouchableRipple>
            }
          >
            <Menu.Item
              onPress={() => {
                /* Handle Edit action */ closeMenu();
              }}
              title="Edit"
            />
            <Menu.Item
              onPress={() => {
                /* Handle Delete action */ closeMenu();
              }}
              title="Remove"
            />
          </Menu>
        </View>
      </View>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    fontFamily: "ir-semi-bold",
    fontSize: 15,
    letterSpacing: 1.5,
  },
  addr: {
    fontFamily: "ir-regular",
    fontSize: 14,
  },
  actionAddress: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35,
    marginLeft: 35,
  },
});
export default AddressItemBottomSheet;
