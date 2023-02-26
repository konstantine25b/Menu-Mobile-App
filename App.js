import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./assets/components/HomeScreen";
import EachRestaurantPage from "./assets/components/EachRestaurantPage";
import EachCategoryMenuPage from "./assets/components/EachCategoryMenuPage";
import BasketPage from "./assets/components/BasketPage";
import { Provider } from "react-redux";
import { store } from "./store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="EachRestaurantPage"
            component={EachRestaurantPage}
          />
          <Stack.Screen
            name="EachCategoryMenuPage"
            component={EachCategoryMenuPage}
          />
          <Stack.Screen
            name="BasketPage"
            component={BasketPage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
