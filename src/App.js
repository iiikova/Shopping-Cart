import "./App.css";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Order from "./components/Order/Order";
import Edit from "./components/Edit/Edit";
import { useState } from "react";

function App() {
  const [menu, setMenu] = useState([
    {
      id: 1,
      name: "Double Big Mac®",
      price: 100,
      kkl: "2901 kJ | 694 kcal",
      status: true,
      description:
        "Four 100% beef patties, a slice of cheese, lettuce, onion and pickles and the unbeatable, tasty Big Mac® sauce.",
    },
    {
      id: 2,
      name: "Salted Caramel Latte",
      price: 100,
      status: true,
      kkl: "691 kJ | 164 kcal",
      description:
        "A luxurious treat. Contains a large shot of espresso blended with steamed milk and salted caramel flavour syrup and topped with a swirl of cream and a sprinkle of caramel sugar dusting.",
    },
    {
      id: 3,
      name: "Nacho Cheese Wedges",
      price: 100,
      kkl: "895 kJ | 215 kcal",
      status: true,
      description:
        "Five Cheese Wedges filled with spicy Jalapeno slices, served with sour cream & chive dip",
    },
    {
      id: 4,
      name: "Cadbury Crunchie McFlurry",
      price: 100,
      kkl: "1459 kJ | 347 kcal",
      status: false,
      description:
        "Soft dairy ice cream, swirled with Cadbury Crunchie pieces and a honeycomb sauce.",
    },
  ]);
  const [order, setOrder] = useState([]);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };
  const decrement = () => {
    setCount((count) => {
      if (count <= 0) alert("smaller tnan 0");
      if (count >= 1) return count - 1;
      if (count === 0) return count;
    });
  };

  const pickItem = (name, price, calories, status, description, count) => {
    const favorite = {
      id: Math.random() * Math.ceil(10),
      name: name,
      price: price,
      kkl: calories,
      status: status,
      description: description,
      amount: count,
    };
    if (!status) return null
    order.push(favorite);
    setOrder([...order]);
    console.log(order);
  };

  return (
    <>
      <div className="App">
        <Header />
        <div className="panel">
          <Menu menu={menu} pickItem={pickItem} />
          <Order
            menu={menu}
            order={order}
            count={count}
            // increment={increment}
            // decrement={decrement}
          />
          <Edit menu={menu} setMenu={setMenu} />
        </div>
      </div>
    </>
  );
}

export default App;
