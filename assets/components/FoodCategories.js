import { View, Text, Image, Pressable, StatusBar } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const FoodCategories = (props) => {
  const { categories } = props;

  const navigation = useNavigation();
  return (
    <Pressable // aris patar divi razec restornis titoeul kategoriasd vantavsebt
      onPress={() => {
        // amit masze dacherisas gadavyavart amave kategoriis meniu listshi
        navigation.navigate("EachCategoryMenuPage", {
          dishes: categories.dishes,
        });
        StatusBar.setBarStyle("dark-content", true);
      }}
      style={{
        marginTop: 15,
        width: "94%",
        alignItems: "center",
        justifyContent: "space-between",
        height: 120,
        backgroundColor: "#622A0F",
        flexDirection: "row",
        padding: 20,
        marginLeft: "3%",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 2,
          height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 25,
          fontWeight: "700",
        }}
      >
        {categories.title}
      </Text>
      <Image
        style={{ width: 100, height: 100, borderRadius: 10 }}
        source={{ uri: categories.img }}
      />
    </Pressable>
  );
};

export default FoodCategories;
