import BottomSheet from "@gorhom/bottom-sheet";
import { View, Text, Pressable } from "react-native";
interface BottomSheetProps {
  refSheet?: any;
  snapPoints?: string[];
  handleSheetChanges?: any;
  index?: number;
}
const AddressBottomSheet = ({
  refSheet,
  snapPoints,
  handleSheetChanges,
  index,
}: BottomSheetProps) => {
  <BottomSheet
    ref={refSheet}
    index={index}
    snapPoints={snapPoints}
    onChange={handleSheetChanges}
    enablePanDownToClose={true}
    backgroundStyle={{ backgroundColor: "#fff" }}
  >
    <View style={{ backgroundColor: "white", padding: 16 }}>
      <Text>Bottom Sheet Content</Text>
      <Pressable
        onPress={() => {
          refSheet.current.close(); // Close the bottom sheet
        }}
      >
        <Text>Close Bottom Sheet</Text>
      </Pressable>
    </View>
  </BottomSheet>;
};

export default AddressBottomSheet;
