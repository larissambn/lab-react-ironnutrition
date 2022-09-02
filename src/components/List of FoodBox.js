function AddFoodBox() {
  const [FoodBox, setFoodBox] = useState({
    Name: '',
    Image: '',
    Calories: '',
    Servings: '',
  });
}
const {name, calories, servings, totalCalories} = props;

function FoodBoxList(FoodBox) {
  <Row/>
    return (
        {FoodBox.map((currentFoodBox) => {
            return ( 
                <Card id={FoodBoxCard}
                  key={Props.currentFoodBox.food.name}
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
