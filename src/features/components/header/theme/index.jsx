import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../../../../hooks/useDarkSide";
import { useState } from "react";

const Theme = () => {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={20} />
  );
};

export default Theme;
