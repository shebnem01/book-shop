import { useState } from "react";
const useToggle = () => {
  const [state, setState] = useState(false);
  const toggle = () => {
    setState((prevState) => !prevState);
  };
  return [state, toggle];
}

export default useToggle