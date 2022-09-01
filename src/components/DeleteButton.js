function DeleteButton() {
  const [FoodBox, updateFoodBox] = useState(defaultFoodBox);

  const handleRemoveItem = (e) => {
    const name = e.target.getAttribute('name');
    updateFoodBox(FoodBox.filter((food) => food.prop.name !== name));
  };

  return (
    <div>
      {list.map((food.prop.name) => {
        return (
          <>
            <span name={food.prop.name} onClick={handleRemoveFoodBox}>
              x
            </span>
            <span>{food.prop.names}</span>
          </>
        );
      })}
    </div>
  );
}

export default DeleteButton;
