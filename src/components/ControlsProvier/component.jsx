import { useCallback, useState } from "react";
import { ControlsContext } from "./context";

export const ControlsProvider = ({ children }) => {
  const [square, setCircled] = useState(true);
  const toggleButtonStyle = useCallback(
    () => setCircled((state) => !state),
    []
  );
  return (
    <ControlsContext.Provider value={{ square, toggleButtonStyle }}>
      {children}
    </ControlsContext.Provider>
  );
};
