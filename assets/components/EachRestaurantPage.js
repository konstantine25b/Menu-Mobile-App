import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Pressable,
  FlatList,
  StatusBar,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  StarIcon,
  MapPinIcon,
} from "react-native-heroicons/solid";
import FoodCategories from "./FoodCategories";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../../features/basketSlice";
import Basket from "./Basket";

const EachRestaurantPage = (props) => {
  // es aris titoeuli restornis page anu ert ert restorans ro daacher aq shemogiyvans
  const {
    params: {
      // es parametrebi und mivigot backendidan
      id,
      RestaurantTitle,
      MainImage,
      adress,
      genre,
      shortDescription,
      rating,
      categories,
    },
  } = useRoute(); // am metodit destruqturacias vuketebt props ( am shemtxvevashi useNavigate hookidan migebul infos)

  const items = useSelector((state) => selectBasketItems(state)); // amit xdeba yvela itemsis amogeba basketidan ( gvchirdeba ro mati raodenoba gavigot)
  const navigation = useNavigation(); // es huki qmnis navigacias
  useLayoutEffect(() => {
    // es aris imitom ro header ar gamochndes  (ushnod)
    navigation.setOptions({
      headerShown: false,
    });
    StatusBar.setBarStyle("dark-content", true); // amit vashavebt status bars
  }, []);

  return (
    <>
      {items.length > 0 ? <Basket theme={"light"} /> : null}

      <ScrollView
        style={{
          backgroundColor: "white",
          position: "relative",
        }}
      >
        <View
          style={{
            position: "relative",
          }}
        >
          <Image // es aris ukana fonze background image roa eg
            source={{
              uri: MainImage,
            }}
            style={{
              width: "100%",
              height: 220,
              backgroundColor: "#622A0F",
              padding: 4,
            }}
          />
          <Pressable // es aris ukan gadasvlis gilaki
            style={{
              position: "absolute",
              marginTop: 50,
              marginLeft: 15,
              backgroundColor: "lightgray",
              padding: 10,
              borderRadius: 22.5,
            }}
            onPress={navigation.goBack}
          >
            <ArrowLeftIcon size={25} color="#622A0F" />
          </Pressable>
        </View>
        <View // aq aris agwera reitingis da adgilmdebareobis
          style={{
            backgroundColor: "white",
            position: "relative",
          }}
        >
          <View style={{ padding: 14 }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                color: "#622A0F",
              }}
            >
              {RestaurantTitle}
            </Text>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <StarIcon color="orange" opacity={0.7} size={22} />
                <Text>
                  {rating} . {genre}
                </Text>
              </View>
              <View
                style={{
                  marginLeft: 10,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <MapPinIcon color="#622A0F" opacity={0.8} size={22} />
                <Text>{adress}</Text>
              </View>
            </View>
            <Text
              style={{
                color: "gray",
                marginTop: 10,
              }}
            >
              {shortDescription}
            </Text>
          </View>
        </View>
        <View // es aris menu ro weria eg
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            borderBottomColor: "#622A0F",
            borderBottomWidth: 1,
            borderTopColor: "#622A0F",
            borderTopWidth: 1,
            justifyContent: "center",
            width: "100%",
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              padding: 13,

              fontWeight: "bold",
              fontSize: 35,
              color: "#622A0F",
            }}
          >
            Menu
          </Text>
        </View>

        <View
          style={{
            paddingBottom: 130,
          }}
        >
          {categories.map(
            (
              item // am metodit gadavurbent yvea categories elements da vawyobt matgan FoodCategories componentebs (ra kategoriebic aqvs restorans)
            ) => (
              <FoodCategories key={item.title} categories={item} />
            )
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default EachRestaurantPage;

{
  /* <FlatList
      data={categories}
      renderItem={({item})=> <FoodCategories categories={item} />}
      keyExtractor={item => item.title}
      /> */
}
