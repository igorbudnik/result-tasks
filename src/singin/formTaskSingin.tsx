import { ChangeEvent, FormEvent, InvalidEvent, useRef, useState } from "react";
import { ISignin } from "../types";
import Input from "../components/input/input";
import "./formTaskSingin.css";

export default function Singin(props: ISignin) {
  const formRef = useRef(null);
  const stateRef = useRef({ email: "", password: "" });
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPasword] = useState("");

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    props.onSubmit(stateRef.current);
  };

  const handleFormInvalid = (e: InvalidEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(e);

    if (!e.target.value) {
      if (e.target.name === "email") {
        setErrorEmail("Обязательное поле");
        return;
      } else if (e.target.name === "password") {
        console.log(e.target.name);
        setErrorPasword("Обязательное поле");
        return;
      }
    } else if (!e.target.validity.valid) {
      setErrorEmail("Некорректный Email");
      return;
    }

    return;
  };

  const handleFormChange = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    stateRef.current = { ...stateRef.current, [e.target.name]: e.target.value };
  };

  const handleEmailFocus = (e: FormEvent) => {
    e.preventDefault();
    setErrorEmail("");
  };
  const handlePasswordFocus = (e: FormEvent) => {
    e.preventDefault();

    setErrorPasword("");
  };

  return (
    <>
      <form
        ref={formRef}
        onSubmit={handleFormSubmit}
        onChange={handleFormChange}
      >
        <Input
          placeholder="Введите Email"
          label="Email"
          withAsterisk
          onInvalid={handleFormInvalid}
          name="email"
          type="email"
          error={errorEmail}
          onFocus={handleEmailFocus}
          required
        />
        <Input
          placeholder="Введите пароль"
          label="Пароль"
          description="Тест описание"
          withAsterisk
          onInvalid={handleFormInvalid}
          name="password"
          type="password"
          error={errorPassword}
          onFocus={handlePasswordFocus}
          required
        />
        <button type="submit">Войти</button>
      </form>
    </>
  );
}
