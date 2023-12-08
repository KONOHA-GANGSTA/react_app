import { Footer } from "../Footer/component";
import { Header } from "../Header/component";
import styles from "./styles.module.css";
import { ControlsProvider } from "../ControlsProvier/component";

export const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <ControlsProvider>
        <Header />
        <main>{children}</main>
      </ControlsProvider>
      <Footer />
    </div>
  );
};
