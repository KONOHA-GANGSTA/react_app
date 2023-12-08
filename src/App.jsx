import { Provider } from "react-redux";
import { RestaurantPage } from "./pages/RestaurantPage/component";
import "./styles/styles.module.css";
import store from "./redux";

export const App = () => {
  return (
    <Provider store={store}>
      <RestaurantPage />
    </Provider>
  );
};
