import { ChangeEvent, FormEvent, useRef } from "react";
import { ISignup } from "./types";

export default function Singup(props: ISignup) {
  const formRef = useRef(null);
  const stateRef = useRef({ email: "", password: "" });

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    props.onSubmit(stateRef.current);
  };

  const handleFormChange = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    stateRef.current = { ...stateRef.current, [e.target.name]: e.target.value };
  };

  return (
    <>
      <form
        ref={formRef}
        onSubmit={handleFormSubmit}
        onChange={handleFormChange}
      >
        <label>Ваш Email</label>
        <input required placeholder="Введите Email" name="email" type="email" />
        <label>Ваш пароль</label>
        <input
          required
          placeholder="Введите пароль"
          name="password"
          type="password"
        />
        <button type="submit">Войти</button>
      </form>
    </>
  );
}
