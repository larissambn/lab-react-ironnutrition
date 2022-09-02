function Form() {
  const [form, setForm] = useState({
    Name: '',
    Image: '',
    Calories: '',
    Servings: '',
  });
}

function handleChange(event) {
  setForm({ ...form, [event.target.name]: event.target.value });
  console.log(form);
}

function AddFoodForm(props) {
  return (
    <form id={newFood}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        value={undefined}
        type="text"
        onChange={handleChange}
        name="Name"
      />

      <label>Image</label>
      <Input
        value={undefined}
        type="text"
        onChange={handleChange}
        name="Image"
      />

      <label>Calories</label>
      <Input
        value={undefined}
        type="number"
        onChange={handleChange}
        name="Calories"
      />

      <label>Servings</label>
      <Input
        value={undefined}
        type="number"
        onChange={handleChange}
        name="Servings"
      />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
