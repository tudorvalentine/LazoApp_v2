import AsyncStorage from "@react-native-async-storage/async-storage";

// Save the JWT token
export const saveJwtToken = async (token) => {
  try {
    await AsyncStorage.setItem("jwtToken", token);
    console.log("JWT token saved successfully.");
  } catch (error) {
    console.error("Error saving JWT token:", error);
  }
};
// Retrieve the JWT token
export const getJwtToken = async () => {
  try {
    const token = await AsyncStorage.getItem("jwtToken");
    if (token !== null) {
      console.log("JWT token retrieved:", token);
      return token;
    } else {
      console.log("JWT token not found.");
      return null;
    }
  } catch (error) {
    console.error("Error retrieving JWT token:", error);
    return null;
  }
};
// Clear the JWT token
export const clearJwtToken = async () => {
  try {
    await AsyncStorage.removeItem("jwtToken");
    console.log("JWT token removed.");
  } catch (error) {
    console.error("Error removing JWT token:", error);
  }
};
