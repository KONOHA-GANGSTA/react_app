import { useState } from "react";
import { Restaurant } from "../../components/Restaurant/component";
import { RestaurantsTabs } from "../../components/RestaurantsTabs/component";
import { Layout } from "../../components/layout/component";
import { useSelector } from "react-redux";
import { selectRestaurantsModuleStatus } from "../../redux/features/entities/restaurants/selectors";
import { REQUEST_STATUSES } from "../../constants/request-statuses";

export const RestaurantPage = () => {
  const [selectedRestaurantId, changeSelectedRestaurantId] = useState(null);
  const loadingStatus = useSelector(selectRestaurantsModuleStatus);

  if (loadingStatus === REQUEST_STATUSES.pending)
    return (
      <div>
        <marquee>Загружаем</marquee>
      </div>
    );
  return (
    <Layout>
      <RestaurantsTabs
        selected={selectedRestaurantId}
        changeSelected={changeSelectedRestaurantId}
      />
      <Restaurant selectedRestaurantId={selectedRestaurantId} />
    </Layout>
  );
};
