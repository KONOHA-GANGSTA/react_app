import { useContext } from "react";
import { ControlsContext } from "../components/ControlsProvier/context";

export const useControls = () => {
  return useContext(ControlsContext);
};
