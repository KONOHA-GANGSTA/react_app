import { useContext } from "react";
import { ButtonThemeContext } from "../components/ButtonThemeProvider/context";

export const useButtonTheme = () => {
  return useContext(ButtonThemeContext);
};
