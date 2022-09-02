//const {food} = props;

function FoodList(foods) {
  return (
    <div>
      {foods.map((currentFood) => {
        return {
          Name: { currentFood.name },
          Image: 'https://image.tmdb.org/t/p/w500 ${currentFood.image_path}',
        };
      })}
    </div>
  );
}
export default FoodList;
