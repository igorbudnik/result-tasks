import { useToggle } from "./hooks/useToggle";

export function Demo6() {
  const [value, toggle] = useToggle(["blue", "orange", "cyan", "teal"]);

  return <button onClick={() => toggle()}>{value}</button>;
}
