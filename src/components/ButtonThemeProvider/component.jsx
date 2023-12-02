import { useControls } from "../../hooks/useControlsContext";
import { ButtonThemeContext } from "./context";

export const ButtonThemeProvider = ({ children }) => {
  const { circled } = useControls();
  return (
    <ButtonThemeContext.Provider value={circled}>
      {children}
    </ButtonThemeContext.Provider>
  );
};
