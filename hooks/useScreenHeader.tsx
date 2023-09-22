import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import BackButton from "../components/Header/BackButton";
import { View } from "react-native";
import MenuButton from "../components/Header/MenuButton";
import OrderButton from "../components/Header/OrderButton";

interface IScreenHeader {
  title?: string;
  hasLeftArrow?: boolean;
  hasLeftMenu?: boolean;
  hasRight?: boolean;
  headerStyle?: Object;
  headerTitleStyle?: Object;
  headerTitleAlign?: string;
  headerTransparent?: boolean;
  headerShown?: boolean;
}

const useScreenHeader = ({
  title = "",
  hasLeftArrow,
  hasLeftMenu,
  hasRight,
  headerStyle,
  headerTitleStyle,
  headerTitleAlign = "center",
  headerTransparent,
  headerShown = false,
}: IScreenHeader) => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      title,
      headerTitleAlign,
      headerTitleStyle,
      headerTransparent,
      headerLeft: () => {
        if (hasLeftArrow) {
          return <BackButton />;
        }
        if (hasLeftMenu) {
          return <MenuButton />;
        }
      },
      headerRight: () => {
        if (hasRight) return <OrderButton />;
      },
      headerStyle: headerStyle,
    });
  }, [navigation]);
};

export default useScreenHeader;
