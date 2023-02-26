import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.items = [...state.items, action.payload]; // am metodit vtovebt rac basketshi da vamatebt kide action.payloadit axal items
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      ); // amit vpoulob tu item romlis amogebac gvinda basketshia
      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `ver amoigeb imitoro ar ari shen basketshi es : ${action.payload.id}`
        );
      }

      state.items = newBasket;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems = (state) => state.basket.items;

export const selectBasketItemsWithId = (state, id) =>
  state.basket.items.filter((item) => {
    return item.id === id;
  });

export const selectBasketTotal = (state) => {
  return state.basket.items.reduce(
    (total, item) => {
      total += item.price;
      let basketTotal = parseFloat(total.toFixed(2));
      return basketTotal;
    },

    0
  );
};

export default basketSlice.reducer;
