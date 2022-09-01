const [filteredList, setFilteredList] = new useState(itemList);

const filterBySearch = (event) => {
  const query = event.target.value;
  let updatedList = [...FoodListList];
  updatedList = updatedList.filter((FoodList) => {
    return FoodList.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });
  setFilteredList(updatedList);
};

function Search(FoodList) {
  return (
    <>
      <Divider>Search</Divider>
      <label>Search</label>
      <input id="search-box" onChange={filterBySearch} />
      <div id="item-list">
        <ol>
          {filteredList.map((FoodList, index) => (
            <li key={index}>{FoodList}</li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default Search;
