import { Footer } from "../Footer/component";
import { Header } from "../Header/component";
import styles from "./styles.module.css";
import { ControlsProvider } from "../ControlsProvier/component";
import { ButtonThemeProvider } from "../ButtonThemeProvider/component";

export const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <ControlsProvider>
        <Header />
        <ButtonThemeProvider>
          <main>{children}</main>
        </ButtonThemeProvider>
        <Footer />
      </ControlsProvider>
    </div>
  );
};
