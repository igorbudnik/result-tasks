import { FormEvent, InvalidEvent } from "react";
import "./input.css";
export interface IInput {
  placeholder: string;
  label: string;
  description?: string;
  variant?: "xs" | "md" | "lg" | "xl";
  radius?: "xs" | "md" | "lg" | "xl";
  withAsterisk?: boolean;
  disabled?: boolean;
  onInvalid?: (e: InvalidEvent<HTMLInputElement>) => void;
  name: string;
  type: string;
  error?: string;
  onFocus?: (e: FormEvent) => void;
  required?: boolean;
}

export default function Input(props: IInput) {
  const {
    label,
    error,
    description,
    withAsterisk,
    radius,
    variant,
    ...options
  } = props;
  let inputRadius;
  switch (radius) {
    case "xs":
      inputRadius = "2px";
      break;
    case "md":
      inputRadius = "6px";
      break;
    case "lg":
      inputRadius = "8px";
      break;
    case "xl":
      inputRadius = "10px";
      break;
    default:
      inputRadius = "4px";
  }

  return (
    <div className="main">
      {label ? (
        <label>
          {label}
          {withAsterisk ? <span className="asterisk">*</span> : null}
        </label>
      ) : null}
      {description ? (
        <small className="description">{description}</small>
      ) : null}
      <input
        {...options}
        style={{
          borderRadius: inputRadius,
        }}
        className={props.error ? "error-placeholder" : ""}
      />
      {error ? <small className="error">{error}</small> : null}
    </div>
  );
}
