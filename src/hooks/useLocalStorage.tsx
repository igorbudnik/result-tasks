import { useEffect, useState } from "react";
import {
  LocalStorageReturnValue,
  LocalStorageSetValue,
  UseLocalStorage,
} from "../types";

// Оставил для истории
// const getValueStorage = (key: string, initialValue: string | Function) => {
//   const saveValue = JSON.stringify(localStorage.getItem(key));

//   if (saveValue) {
//     return saveValue;
//   }

//   if (initialValue instanceof Function) {
//     return initialValue();
//   }

//   return initialValue;
// };

export const useLocalStorage: UseLocalStorage = (key: string) => {
  const [value, setValue] = useState<LocalStorageReturnValue>(
    localStorage.getItem(key)
  );

  useEffect(() => {
    localStorage.setItem(key, value!);
  }, [value]);

  const setItem = (value: LocalStorageSetValue) => {
    setValue(value);
  };

  const removeItem = () => {
    setValue("");
  };

  return [value, setItem, removeItem];
};
