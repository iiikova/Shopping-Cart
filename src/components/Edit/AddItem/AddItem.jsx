import React from "react";
import s from './AddItem.module.css'

export const AddItem = ({menu, setMenu}) => {
  const nameRef = React.createRef();
  const priceRef = React.createRef();
  const caloriesRef = React.createRef();
  const statusRef = React.createRef();  
  const descriptionRef = React.createRef();

  const addItem = (e) => {
    e.preventDefault();
    const randomNum = Math.random() * 10;
    const nameValue = nameRef.current.value
    if(nameValue === '') return alert('please enter name')

    const item = {
      id: randomNum,
      name: nameValue,
      price: priceRef.current.value,
      calories: caloriesRef.current.value,
      status: statusRef.current.value,
      description: descriptionRef.current.value,
    };
    setMenu([...menu, item])
    console.log(...menu, item);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={addItem}>
      <input
        name="name"
        ref={nameRef}
        type="text"
        placeholder="name"
        autoComplete="off"
      />
      <input
        name="price"
        ref={priceRef}
        type="number"
        placeholder="price"
        autoComplete="off"
      />
      <input
        name="calories"
        ref={caloriesRef}
        type="number"
        placeholder="calories"
        autoComplete="off"
      />
      <select name="status" ref={statusRef}>
        <option value="yes">yes</option>
        <option value="no">no</option>
      </select>
      <textarea
        name="description"
        ref={descriptionRef}
        type="text"
        placeholder="description"
      />
      {/* <input name="image" /> */}
      <button type="submit">Submit</button>
    </form>
  );
};
