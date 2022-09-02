export default DeleteButton;

function DeleteButton() {  
  const [FoodBox, updateFoodBox] = useState(defaultFoodBox);
  const handleRemoveFoodBox = (e) => {
  const name = e.target.getAttribute('name');
  updateFoodBox(FoodBox.filter((food) => food.prop.name !== name));};

  return (
  
  <div>
  {FoodBox.map((food.prop.name)  
   return (<> <span name={food.prop.name} onClick={handleRemoveFoodBox}></span>
  <span>{food.prop.names}</span></>);){"}"}    
  </div>);
}