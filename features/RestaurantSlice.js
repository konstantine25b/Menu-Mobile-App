import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurant:{
    id: null,
    RestaurantTitle: null,
    MainImage:null,
    adress: null,
    genre: null,
    shortDescription:null,
    rating: null,
    categories:null,
  }
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant:(state,action)=>{
        state.restaurant = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions; // amit xdeba rom vicodet romeli restornidan vukvetavt

export const selectRestaurant = (state) => state.restaurant.restaurant;



export default restaurantSlice.reducer;
