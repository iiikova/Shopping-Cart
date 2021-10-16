import React from "react";

export const AddItem = () => {
  const addItem = (e) => {
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const price = document.querySelector("#price").value;
    const calories = document.querySelector("#calories").value;
    const select = document.querySelector("#select").value;
    const description = document.querySelector("#description").value;

    console.log(`
    name: ${name} 
    and price: ${price} 
    and ${calories} 
    and status: ${select}
    and description: ${description}
    
    `);
  };

  return (
    <form onSubmit={addItem}>
      <input
        name="name"
        id="name"
        type="text"
        placeholder="name"
        autoComplete="off"
      />
      <input
        name="price"
        id="price"
        type="number"
        placeholder="price"
        autoComplete="off"
      />
      <input
        name="calories"
        id="calories"
        type="number"
        placeholder="calories"
        autoComplete="off"
      />
      <select name="status" id="select">
        <option value="yes">yes</option>
        <option value="no">no</option>
      </select>
      <textarea name="description" id='description' type="text" placeholder="description" />
      {/* <input name="image" /> */}
      <button type="submit">Submit</button>
    </form>
  );
};
