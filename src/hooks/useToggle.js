import { useReducer, useState } from "react";

const toggleNext = (state, action) => {
  if (action.type === "next") {
    if (state.index === state.array.length - 1) {
      return { ...state, index: 0 };
    }
    return { ...state, index: state.index + 1 };
  } else if (action.type === "definedValue") {
    return { ...state, index: state.array.indexOf(action.option) };
  }
};

export function useToggle(array) {
  const [value, dispatch] = useReducer(toggleNext, { array: array, index: 0 });

  const toggle = (val) => {
    if (val) {
      console.log(val);

      dispatch({ type: "definedValue", option: val });
      return;
    }
    dispatch({ type: "next" });
    return;
  };

  return [value.array[value.index], toggle];
}
