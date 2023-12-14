import React from "react";
import Item from "./Item";
import { useState } from "react";

function ShoppingList({ items }) {
  const [category, setCategory] = useState("All")

  function handleChange(event) {
      setCategory(event.target.value)
  }

  const filteredItems = items.filter(item => {
    if (category === "All") {
      return true
    } else {
    return item.category === category}
  })
  // above could also be ' return item.category === category || category === "All"
  // || = and,Or statement

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange} value={category}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
