import {
  View,
  Text,
  Pressable,
  Image,
  SafeAreaView,
  StatusBar,
  FlatList,
} from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon,
} from "react-native-heroicons/solid";
import EachFoodCard from "./EachFoodCard";
import Basket from "./Basket";
import {  useSelector } from "react-redux";
import { selectBasketItems } from "../../features/basketSlice";


const EachCategoryMenuPage = (props) => {
  // es aris titoeuli kategoriis menu listi
  const navigation = useNavigation(); // am metodit shemogvaqvs titoeulis props am shemtxvevashi kerdzebi(dishes) da mati agwera
  

  const {
    params: { dishes },
  } = useRoute();

  const items = useSelector((state) => selectBasketItems(state)); // amit xdeba yvela itemsis amogeba basketidan ( gvchirdeba ro mati raodenoba gavigot)

 

  useLayoutEffect(() => {
    // es aris imitom ro header ar gamochndes  (ushnod)
    navigation.setOptions({
      headerShown: false,
    });
    StatusBar.setBarStyle("light-content", true);
  }, []);

  return (
    <>
      <View // es aris headeris pontshi ro feri iyos cinamonisferi
        style={{
          height: 50,
          backgroundColor: "#622A0F",
        }}
      ></View>
      <View
        style={
          {
            //es samomavlod shesacvleli iqneba ragac bagi aq ro bolos kargad ar achvenebs da magito vqeni
          }
        }
      >
        <View // es arissadac weria restornis saxeli ukan gasvlis gilaki da search gilaki
          style={{
            height: 90,
            width: "100%",
            backgroundColor: "#622A0F",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <Pressable
            style={{
              width: 45,
              backgroundColor: "lightgray",
              padding: 10,
              borderRadius: 22.5,
            }}
            onPress={navigation.goBack}
          >
            <ArrowLeftIcon size={25} color="#622A0F" />
          </Pressable>
          <Text
            style={{
              color: "white",
              fontSize: 25,
              fontWeight: "400",
            }}
          >
            {dishes[0].title}
          </Text>
          <Pressable
            style={{
              width: 45,

              padding: 10,
            }}
          >
            <MagnifyingGlassIcon size={25} color="white" />
          </Pressable>
        </View>

        <FlatList // amit chven vawyobt bevr titoeul foodze divs
          data={dishes}
          contentContainerStyle={{ paddingBottom: 350 }}
          renderItem={({ item }) => <EachFoodCard dishes={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
      {/*amit xdeba is rom gamochndes basketi tu rame aris itemshi*/}
      {items.length > 0 ? <Basket theme={"dark"} /> : null}
    </>
  );
};

export default EachCategoryMenuPage;

{
  /* <FlatList
      data={categories}
      renderItem={({item})=> <FoodCategories categories={item} />}
      keyExtractor={item => item.title}
      /> */
}
