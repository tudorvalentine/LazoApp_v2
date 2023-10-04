import { View, Text } from "react-native";
import styles from "./style";
import useScreenHeader from "../../hooks/useScreenHeader";
import CustomInput from "../../components/CustomInput";
import BottomButton from "../../components/BottomButton";
const AddNewCardScreen = () => {
  useScreenHeader({
    title: "Add New Card",
    hasLeftArrow: true,
    headerStyle: { height: 120 },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Card Owner</Text>
      <CustomInput placeholder="Cumatru Delfin" />
      <Text style={styles.label}>Card Number</Text>
      <CustomInput placeholder="5254 7634 8734 5690" />
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1, paddingRight: 15 }}>
          <Text style={styles.label}>EXP</Text>
          <CustomInput placeholder="24/02" />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>CVV</Text>
          <CustomInput placeholder="699" />
        </View>
      </View>
      <View style={styles.containerBottomBtn}>
        <BottomButton buttonText="Add Card" onPress={() => {}} />
      </View>
    </View>
  );
};

export default AddNewCardScreen;
