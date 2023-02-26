import {
  View,
  Text,
  Pressable,
  StatusBar,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import {
  XCircleIcon,
  MinusCircleIcon,
  PlusCircleIcon,
} from "react-native-heroicons/solid";
import React, { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../../features/RestaurantSlice";
import {
  removeFromBasket,
  selectBasketItems,
  addToBasket,
  selectBasketTotal,
} from "../../features/basketSlice";
import { SafeAreaView } from "react-native-safe-area-context";

const BasketPage = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const BasketTotal = useSelector(selectBasketTotal)
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const dispatch = useDispatch();

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);
  }, [items]);
  StatusBar.setBarStyle("dark-content", true);



  return (<>
  <View style ={{
          position:'absolute',
          bottom: 0,
          width: '100%',
          zIndex:1
          

        }}>
          <View style ={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection:'row',
            backgroundColor:"#622A0F",
            padding:10,
            
          }}>
            <Text
            style ={{
              color:"gray",
              fontSize: 15,
              fontWeight: '500',
            }}
            >Subtotal</Text>
            <Text
            style ={{
              color:"gray",
              fontSize: 15,
              fontWeight: '500',
            }}>{BasketTotal} ₾</Text>
          </View>
          <View style ={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection:'row',
            backgroundColor:"#622A0F",
            padding:10,
            
          }}>
            <Text
            style ={{
              color:"gray",
              fontSize: 15,
              fontWeight: '500',
            }}>Service Fee</Text>
            <Text
            style ={{
              color:"gray",
              fontSize: 15,
              fontWeight: '500',
            }}>{10} ₾</Text>
          </View>
          <View style ={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection:'row',
            backgroundColor:"#622A0F",
            padding:10,

            
          }}>
            <Text
            style ={{
              color:"white",
              fontSize: 17,
              fontWeight: '500',
            }}>Total</Text>
            <Text
            style ={{
              color:"white",
              fontSize: 17,
              fontWeight: '500',
            }}>{BasketTotal +10} ₾</Text>
          </View>
          <View style ={{
            paddingBottom: 50,
            padding:10,
            backgroundColor:"#622A0F",
            width:'100%',
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'column',
            

          }}>
          <Pressable
          style ={{
            backgroundColor:'white',
            width: '70%',
            padding:10,
            bordeRadius: 14,
           flexDirection:'row',
           justifyContent:'center',
           alignItems:'center',
          }}
          >
            <Text
             style ={{
              color:"#622A0F",
              fontSize:20,
              fontWeight: '700'


             }}>Confirm Order</Text>
          </Pressable>

          </View>
          

        </View>
  
  
    <SafeAreaView>
         
      <View>
        <View
          style={{
            height: 100,
          
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            borderBottomWidth: 1,
            borderBottomColor: "#622A0F",
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 25,
                fontWeight: "500",
                color: "#622A0F",
              }}
            >
              Basket items
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "400",
              }}
            >
              {restaurant.RestaurantTitle}
            </Text>
          </View>
          <Pressable
            style={{
              width: 45,
              marginTop: 34,
              position: "absolute",
              zIndex: 1,
              top: -21,
              right: 10,
              padding: 5,
            }}
            onPress={navigation.goBack}
          >
            <XCircleIcon size={45} color="#622A0F" />
          </Pressable>
        </View>

        <ScrollView >
          <View
          style ={{
            paddingBottom: 410
          }}>
          {Object.entries(groupedItemsInBasket).map(([key, items]) => {
            return (
              <View key={key} style={{
                backgroundColor:'white',
                marginTop: 10,
              }}>
                <View
                  
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 10,
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "500",
                      }}
                    >
                      {items.length} x
                    </Text>
                    <Image
                      style={{
                        marginLeft: 5,
                        width: 80,
                        height: 80,
                      }}
                      source={{
                        uri: items[0]?.img,
                      }}
                    />
                    <Text
                      style={{
                        marginLeft: 7,
                        fontSize: 16,
                        fontWeight: "500",
                      }}
                    >
                      {items[0]?.food}
                    </Text>
                  </View>

                  <Text>{items[0]?.price} ₾</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 10,
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <Pressable
                   style={{
                    flexDirection:'row',
                    alignItems: 'center'
                  }}
                    onPress={() => {
                      dispatch(removeFromBasket({ id: key }));
                    }}
                  >
                    <Text>Remove</Text>
                    <MinusCircleIcon
                      size={40}
                      color={items.length > 0 ? "#622A0F" : "gray"}
                      style={{
                        marginRight: 10,
                      }}
                    />

                  </Pressable>
                  <Pressable style={{
                    flexDirection:'row',
                    alignItems: 'center'
                  }}
                    onPress={() => {
                      dispatch(
                        addToBasket({
                          id: items[0]?.id,
                          aproxTime: items[0]?.aproxTime,
                          img: items[0]?.img,
                          food: items[0]?.food,
                          description: items[0]?.description,
                          price: items[0]?.price,
                        })
                      );
                    }}
                  >
                    <Text>Add</Text>
                    <PlusCircleIcon
                      size={40}
                      color={items.length > 0 ? "#622A0F" : "gray"}
                      style={{
                        marginRight: 10,
                      }}
                    />

                  </Pressable>
                  
                </View>
              </View>
            );
          })}
          </View>
        </ScrollView>
       
      </View>
      
    </SafeAreaView>
    </>
  );
};

export default BasketPage;

{
  /* <Pressable
            style={{
              width: 45,
              marginTop:34,
              backgroundColor: "lightgray",
              padding: 10,
             
            }}
            onPress={
              navigation.goBack
            }
           
            
            
      >
            <ArrowLeftIcon size={25} color="#622A0F" />
      </Pressable> */
}
{
  /*
       <FlatList // amit chven vawyobt bevr titoeul foodze divs
          data={dishes}
          contentContainerStyle={{ paddingBottom: 350 }}
          renderItem={({ item }) => <EachFoodCard dishes={item} />}
          keyExtractor={(item) => item.id}
        /> */
}
