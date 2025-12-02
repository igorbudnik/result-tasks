import { FormEvent } from "react";

export type LocalStorageSetValue = string;
export type LocalStorageReturnValue = LocalStorageSetValue | null;

export type UseLocalStorage = (
  key: string
) => [
  value: LocalStorageReturnValue,
  setItem: (value: LocalStorageSetValue) => void,
  removeItem: () => void
];

export interface ISignin {
  onSubmit: (data: { email: string; password: string }) => void;
}

export interface ISignup {
  onSubmit: (data: { email: string; password: string }) => void;
}
