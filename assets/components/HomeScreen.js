import { View, Text, SafeAreaView, Pressable } from "react-native";
import React, { useLayoutEffect, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { setRestaurant } from "../../features/RestaurantSlice";
import { useDispatch } from "react-redux";

const HomeScreen = () => {
  const props = {
    // karoche es am shemtxvevashi chavtvalot back endios pontshi sadac aris info titoeul restoranze
    id: 1,
    RestaurantTitle: "MacDonalds",
    MainImage:
      "https://www.aucklandairport.co.nz/-/media/Images/Traveller/Retail/Eat-and-Relax/Restaurant-main-images/McDonalds5.ashx",
    adress: "arayishvili street 1",
    genre: "Fast Food",
    shortDescription: "adgili sadac aris burgerebi an rame msgavsi",
    rating: 4.5,
    categories: [
      {
        title: "Mac Menu",
        img: "https://mcdonalds.ge/fab1f6d43b32-resized.png",
        dishes: [
          {
            id: "kerdzi1",
            title: "Mac Menu1",
            food: "Big Mac Menu",
            description:
              "The McDonald's Big Mac® is a 100% beef burger with a taste like no other. The mouthwatering perfection starts with two 100% pure all beef patties and Big Mac® sauce sandwiched between a sesame seed bun. It's topped off with pickles, crisp shredded lettuce, finely chopped onion, and a slice of American cheese.",
            aproxTime: "15min",
            img: "https://mcdonalds.ge/7dfd49e1d85f-resized.png",
            price: 10.3,
          },
          {
            id: "kerdzi2",
            title: "Mac Menu2",
            food: "Big Mac Menu",
            description:
              "The McDonald's Big Mac® is a 100% beef burger with a taste like no other. The mouthwatering perfection starts with two 100% pure all beef patties and Big Mac® sauce sandwiched between a sesame seed bun. It's topped off with pickles, crisp shredded lettuce, finely chopped onion, and a slice of American cheese.",
            aproxTime: "15min",
            img: "https://mcdonalds.ge/7dfd49e1d85f-resized.png",
            price: 9.34,
          },
          {
            id: "kerdzi3",
            title: "Mac Menu3",
            food: "Big Mac Menu",
            description:
              "The McDonald's Big Mac® is a 100% beef burger with a taste like no other. The mouthwatering perfection starts with two 100% pure all beef patties and Big Mac® sauce sandwiched between a sesame seed bun. It's topped off with pickles, crisp shredded lettuce, finely chopped onion, and a slice of American cheese.",
            aproxTime: "15min",
            img: "https://mcdonalds.ge/7dfd49e1d85f-resized.png",
            price: 3.32,
          },
          {
            id: "kerdzi4",
            title: "Mac Menu4",
            food: "Big Mac Menu",
            description:
              "The McDonald's Big Mac® is a 100% beef burger with a taste like no other. The mouthwatering perfection starts with two 100% pure all beef patties and Big Mac® sauce sandwiched between a sesame seed bun. It's topped off with pickles, crisp shredded lettuce, finely chopped onion, and a slice of American cheese.",
            aproxTime: "15min",
            img: "https://mcdonalds.ge/7dfd49e1d85f-resized.png",
            price: 16.32,
          },
          {
            id: "kerdzi5",
            title: "Mac Menu5",
            food: "Big Mac Menu",
            description:
              "The McDonald's Big Mac® is a 100% beef burger with a taste like no other. The mouthwatering perfection starts with two 100% pure all beef patties and Big Mac® sauce sandwiched between a sesame seed bun. It's topped off with pickles, crisp shredded lettuce, finely chopped onion, and a slice of American cheese.",
            aproxTime: "15min",
            img: "https://mcdonalds.ge/7dfd49e1d85f-resized.png",
            price: 101.23,
          },
          {
            id: "kerdzi6",
            title: "Mac Menu6",
            food: "Big Mac Menu",
            description:
              "The McDonald's Big Mac® is a 100% beef burger with a taste like no other. The mouthwatering perfection starts with two 100% pure all beef patties and Big Mac® sauce sandwiched between a sesame seed bun. It's topped off with pickles, crisp shredded lettuce, finely chopped onion, and a slice of American cheese.",
            aproxTime: "15min",
            img: "https://mcdonalds.ge/7dfd49e1d85f-resized.png",
            price: 10.45,
          },
          {
            id: "kerdzi7",
            title: "Mac Menu7",
            food: "Big Mac Menu",
            description:
              "The McDonald's Big Mac® is a 100% beef burger with a taste like no other. The mouthwatering perfection starts with two 100% pure all beef patties and Big Mac® sauce sandwiched between a sesame seed bun. It's topped off with pickles, crisp shredded lettuce, finely chopped onion, and a slice of American cheese.",
            aproxTime: "15min",
            img: "https://mcdonalds.ge/7dfd49e1d85f-resized.png",
            price: 0.44,
          },
        ],
      },
      {
        title: "Hot Drinks",
        img: "https://mcdonalds.ge/842c1486ab25-resized.png",
        dishes: [
          {
            id: "kerdzi8",
            title: "Mac Menu8",
            food: "Big Mac Menu",
            description:
              "The McDonald's Big Mac® is a 100% beef burger with a taste like no other. The mouthwatering perfection starts with two 100% pure all beef patties and Big Mac® sauce sandwiched between a sesame seed bun. It's topped off with pickles, crisp shredded lettuce, finely chopped onion, and a slice of American cheese.",
            aproxTime: "15min",
            img: "https://mcdonalds.ge/7dfd49e1d85f-resized.png",
            price: 9.3,
          },
        ],
      },
      {
        title: "Burgers",
        img: "https://mcdonalds.ge/b174a52c65d4-resized.jpg",
        dishes: [
          {
            id: "kerdzi9",
            title: "Mac Menu9",
            food: "Big Mac Menu",
            description:
              "The McDonald's Big Mac® is a 100% beef burger with a taste like no other. The mouthwatering perfection starts with two 100% pure all beef patties and Big Mac® sauce sandwiched between a sesame seed bun. It's topped off with pickles, crisp shredded lettuce, finely chopped onion, and a slice of American cheese.",
            aproxTime: "15min",
            img: "https://mcdonalds.ge/7dfd49e1d85f-resized.png",
            price: 0.34,
          },
        ],
      },
      {
        title: "Sides",
        img: "https://mcdonalds.ge/2b454faa6f95.net-resizeimage-resized-resized.jpg",
        dishes: [
          {
            id: "kerdzi10",
            title: "Mac Menu10",
            food: "Big Mac Menu",
            description:
              "The McDonald's Big Mac® is a 100% beef burger with a taste like no other. The mouthwatering perfection starts with two 100% pure all beef patties and Big Mac® sauce sandwiched between a sesame seed bun. It's topped off with pickles, crisp shredded lettuce, finely chopped onion, and a slice of American cheese.",
            aproxTime: "15min",
            img: "https://mcdonalds.ge/7dfd49e1d85f-resized.png",
            price: 12,
          },
        ],
      },
      {
        title: "Salads",
        img: "https://mcdonalds.ge/9aa52fa0a2bd-resized.jpg",
        dishes: [
          {
            id: "kerdzi11",
            title: "Mac Menu11",
            food: "Big Mac Menu",
            description:
              "The McDonald's Big Mac® is a 100% beef burger with a taste like no other. The mouthwatering perfection starts with two 100% pure all beef patties and Big Mac® sauce sandwiched between a sesame seed bun. It's topped off with pickles, crisp shredded lettuce, finely chopped onion, and a slice of American cheese.",
            aproxTime: "15min",
            img: "https://mcdonalds.ge/7dfd49e1d85f-resized.png",
            price: 1.23,
          },
        ],
      },
      {
        title: "ColdDrinks",
        img: "https://mcdonalds.ge/8e38c54afd6c.net-resizeimage%20(3)-resized-resized.jpg",
        dishes: [
          {
            id: "kerdzi12",
            title: "Mac Menu12",
            food: "Big Mac Menu",
            description:
              "The McDonald's Big Mac® is a 100% beef burger with a taste like no other. The mouthwatering perfection starts with two 100% pure all beef patties and Big Mac® sauce sandwiched between a sesame seed bun. It's topped off with pickles, crisp shredded lettuce, finely chopped onion, and a slice of American cheese.",
            aproxTime: "15min",
            img: "https://mcdonalds.ge/7dfd49e1d85f-resized.png",
            price: 0.34,
          },
        ],
      },
      {
        title: "Descerts",
        img: "https://mcdonalds.ge/b7ffe80dc06e-resized.jpg",
        dishes: [
          {
            id: "kerdzi13",
            title: "Mac Menu13",
            food: "Big Mac Menu",
            description:
              "The McDonald's Big Mac® is a 100% beef burger with a taste like no other. The mouthwatering perfection starts with two 100% pure all beef patties and Big Mac® sauce sandwiched between a sesame seed bun. It's topped off with pickles, crisp shredded lettuce, finely chopped onion, and a slice of American cheese.",
            aproxTime: "15min",
            img: "https://mcdonalds.ge/7dfd49e1d85f-resized.png",
            price: 1992.3,
          },
        ],
      },
      {
        title: "Souses",
        img: "https://mcdonalds.ge/74cb1d6bcd04-resized.jpg",
        dishes: [
          {
            id: "kerdzi14",
            title: "Mac Menu14",
            food: "Big Mac Menu",
            description:
              "The McDonald's Big Mac® is a 100% beef burger with a taste like no other. The mouthwatering perfection starts with two 100% pure all beef patties and Big Mac® sauce sandwiched between a sesame seed bun. It's topped off with pickles, crisp shredded lettuce, finely chopped onion, and a slice of American cheese.",
            aproxTime: "15min",
            img: "https://mcdonalds.ge/7dfd49e1d85f-resized.png",
            price: 200434.34,
          },
        ],
      },
    ],
  };

  const navigation = useNavigation(); // am hookit chven onpressze gadavyavart titoeul restoranis pageze
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setRestaurant({// am funqciit vagebinebt romeli restornidan vukvetavt
        id : props.id,
        RestaurantTitle : props.RestaurantTitle,
        MainImage : props.MainImage,
        adress : props.adress,
        genre : props.genre,
        shortDescription : props.shortDescription,
        rating : props.rating,
        categories : props.categories,
      })
    );
  }, [dispatch]);

  useLayoutEffect(() => {
    // es aris imitom ro header ar gamochndes  (ushnod)
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
      <Pressable
        onPress={() => {
          navigation.navigate("EachRestaurantPage", {
            id: props.id,
            RestaurantTitle: props.RestaurantTitle,
            MainImage: props.MainImage,
            adress: props.adress,
            genre: props.genre,
            shortDescription: props.shortDescription,
            rating: props.rating,
            categories: props.categories,
          });
        }}
        style={{ backgroundColor: "gray", width: 200, height: 100 }}
      >
        <Text>press me to go to the restaurant page</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default HomeScreen;
