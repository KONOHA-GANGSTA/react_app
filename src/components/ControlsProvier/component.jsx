import { useCallback, useState } from "react";
import { ControlsContext } from "./context";

export const ControlsProvider = ({ children }) => {
  const [circled, setCircled] = useState(true);
  const toggleButtonStyle = useCallback(
    () => setCircled((state) => !state),
    []
  );
  return (
    <ControlsContext.Provider value={{ circled, toggleButtonStyle }}>
      {children}
    </ControlsContext.Provider>
  );
};
