// hooks/useNavigationHeader.js
import { useNavigation } from "@react-navigation/native";

const useNavigationHeader = () => {
  const navigation = useNavigation();

  // Function to set the header title
  const setHeaderTitle = (title) => {
    navigation.setOptions({
      title: title,
    });
  };

  return { setHeaderTitle };
};

export default useNavigationHeader;
