import { createSlice, configureStore } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;

// 原生counter reducer
function counterReducer(state = { value: 0 }, { type, payload }) {
  switch (type) {
    case "increment":
      return state.value++;
    default:
      break;
  }
}
// action creator
function increase() {
  return {
    type: "increment",
    payload: "",
  };
}
