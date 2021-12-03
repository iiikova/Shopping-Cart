import "./App.css";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Order from "./components/Order/Order";

import { useState } from "react";

function App() {
  const [menu, setMenu] = useState([
    {
      id: 1,
      name: "Onion",
      price: 123,
      status: true,
      description:
        "Four 100% beef patties, a slice of cheese, lettuce, onion and pickles and the unbeatable, tasty Big Mac® sauce.",
      amount: 1,
    },
    {
      id: 2,
      name: "Tomato",
      price: 43,
      status: true,
      description:
        "A luxurious treat. Contains a large shot of espresso blended with steamed milk and salted caramel flavour syrup and topped with a swirl of cream and a sprinkle of caramel sugar dusting.",
      amount: 1,
    },
    {
      id: 3,
      name: "Potato",
      price: 65,
      status: true,
      description:
        "Five Cheese Wedges filled with spicy Jalapeno slices, served with sour cream & chive dip",
      amount: 1,
    },
    {
      id: 4,
      name: "Cucumber",
      price: 23,
      status: false,
      description:
        "Soft dairy ice cream, swirled with Cadbury Crunchie pieces and a honeycomb sauce.",
      amount: 1,
    },
  ]);
  const [order, setOrder] = useState([]);

  const removeItem = (id) => {
    const dele = order.filter((name) => name.id !== id);
    setOrder(dele);
    console.log("delete", dele);
  };

  const addOrder = (name, price, calories, status, description, amount) => {
    const newItem = {
      id: Math.random() * Math.ceil(10),
      name: name,
      price: price,
      calories: calories,
      status: status,
      amount: amount,
      description: description,
    };
    order.push(newItem);
    setOrder([...order]);
    console.log(order);
  };

  const onAdd = (product) => {
    const exist = order.find((x) => x.id === product.id);
    if (exist) {
      setOrder(
        order.map((x) =>
          x.id === product.id ? { ...exist, amount: exist.amount + 1 } : x
        )
      );
    } else {
      setOrder([...order, { ...product, amount: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = order.find((x) => x.id === product.id);
    if (exist.amount === 1) {
      setOrder(order.filter((f) => f.id !== product.id));
    } else {
      setOrder(
        order.map((x) =>
          x.id === product.id ? { ...exist, amount: exist.amount - 1 } : x
        )
      );
    }
  };

  return (
    <>
        <div className="App">
          <Header />
          <div className="panel">
            <Menu menu={menu} onAdd={onAdd} removeItem={removeItem} />
            <Order order={order} onAdd={onAdd} onRemove={onRemove} />
            {/* <Edit menu={menu} setMenu={setMenu} /> */}
          </div>
        </div>
    </>
  );
}

export default App;
