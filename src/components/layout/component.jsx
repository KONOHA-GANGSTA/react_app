import { Footer } from "../Footer/component";
import { Header } from "../Header/component";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
