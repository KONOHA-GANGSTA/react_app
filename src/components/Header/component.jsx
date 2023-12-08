import cn from "classnames";
import styles from "./styles.module.css";
import { LayoutButton } from "../LayoutButton/component";
import { useControls } from "../../hooks/useControlsContext";
import { ControlsProvider } from "../ControlsProvier/component";

export const Header = ({ className }) => {
  const { toggleButtonStyle } = useControls();
  return (
    <ControlsProvider>
      <div className={cn(className, styles.layout)}>
        <div>HEADER</div>
        <LayoutButton className={styles.buttons}>Заказы</LayoutButton>
        <LayoutButton onClick={toggleButtonStyle} className={styles.buttons}>
          Смена темы
        </LayoutButton>
      </div>
    </ControlsProvider>
  );
};
