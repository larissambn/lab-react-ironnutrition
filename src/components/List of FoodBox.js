function FoodBoxList(FoodBox) {
    return (
        {FoodBox.map((currentFoodBox) => {
            return (
                <Card
                  key={Props.currentFoodBox.food}
                  name={Props.currentFoodBox.food.name}
                  calories={Props.currentFoodBox.food.calories}
                  servings={Props.currentFoodBox.food.servings}
                />
              );
            }
          )
        }
      )
    } 

export default FoodBoxList;
