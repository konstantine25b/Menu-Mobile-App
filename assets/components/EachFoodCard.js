import { View, Text, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { PlusCircleIcon, MinusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  selectBasketItemsWithId,
  removeFromBasket,
} from "../../features/basketSlice";

const EachFoodCard = (props) => {
  // es aris tiroeuli kategoriis titoeuli foodis divis awyobis meqanizmi
  const { dishes } = props;

  const id = dishes.id;
  const aproxTime = dishes.aproxTime;
  const img = dishes.img;
  const food = dishes.food;
  const description = dishes.description;
  const price = dishes.price;

  const [isPressed, setIsPressed] = useState(false); // amiti xdeba daechira tu ara imis kontroli

  const items = useSelector((state) => selectBasketItemsWithId(state, id)); // amis funqcia aris is rom basket itemsidan gvitxras romeli food ramdeni aqvs archeuli
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, aproxTime, img, food, description, price }));
  };
  const removeItemFromBasket = () => {
    if (!items.length > 0) return;
    dispatch(removeFromBasket({ id }));
  };

  return (
    <>
      <Pressable
        onPress={() => {
          setIsPressed(items.length >= 0 ? !isPressed : isPressed); // es aketebs imas rom dacheraze qvemot damatebis da gamoklebis nishnebi gamoachinos
        }}
        style={{
          width: "98%",
          marginLeft: "1%",
          marginTop: 15,

          backgroundColor: "white",
          borderRadius: 10,
          padding: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            //es marcxniv sataurs da agweras aketebs
            width: "55%",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "black",
              paddingBottom: 10,
            }}
          >
            {dishes.food}
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: "gray",
            }}
          >
            {dishes.description}
          </Text>
        </View>
        <View // es marjvena mxares rac aris yvelafers
          style={{
            alignItems: "stretch",
            justifyContent: "space-between",
          }}
        >
          <Image
            source={{
              uri: dishes.img,
            }}
            style={{
              width: 130,
              height: 130,
              borderRadius: 5,
            }}
          />
          <View
            style={{
              marginTop: 7,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 11,
                  color: "gray",
                }}
              >
                Aprox. Time:{" "}
              </Text>
              <Text
                style={{
                  color: "black",
                  fontSize: 15,
                }}
              >
                {dishes.aproxTime}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 11,
                  color: "gray",
                }}
              >
                Price:{" "}
              </Text>
              <Text
                style={{
                  color: "black",
                  fontSize: 15,
                }}
              >
                {dishes.price} ₾
              </Text>
            </View>
          </View>
        </View>
      </Pressable>

      {isPressed && (
        <View
          style={{
            marginLeft: "10%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Pressable
              disabled={items.length == 0 ? true : false} // es 0 ze minusis gilaks tishavs
              onPress={() => {
                removeItemFromBasket();
              }}
            >
              <MinusCircleIcon
                size={40}
                color={items.length > 0 ? "#622A0F" : "gray"}
                style={{
                  marginRight: 10,
                }}
              />
            </Pressable>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "600",
              }}
            >
              {items.length}
            </Text>
            <Pressable
              onPress={() => {
                addItemToBasket();
              }}
            >
              <PlusCircleIcon
                size={40}
                color="#622A0F"
                style={{
                  marginLeft: 10,
                }}
              />
            </Pressable>
          </View>
        </View>
      )}
    </>
  );
};

export default EachFoodCard;
