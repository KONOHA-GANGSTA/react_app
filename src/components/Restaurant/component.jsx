export const Restaurant = ({ restaurant }) => {
  return (
    <div>
      <h1>{restaurant.name}</h1>
      <h2>Меню</h2>
      <ul>
        {restaurant.menu.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
      <h2>Отзывы</h2>
      <ul>
        {restaurant.reviews.map((item) => (
          <li>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};
