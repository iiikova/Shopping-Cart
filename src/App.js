import "./App.css";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Order from "./components/Order/Order";

import { useState } from "react";

function App() {
  const [menu] = useState([
    {
      id: 1,
      img: "https://cdn.theatlantic.com/thumbor/woR9UVVtFp9f5yl9Xul4HxQ4Hd4=/0x72:1000x635/960x540/media/img/mt/2015/05/shutterstock_247399801/original.jpg",
      name: "Onion",
      price: 10,
      status: true,
      amount: 1,
    },
    {
      id: 2,
      name: "Tomato",
      img: "https://post.healthline.com/wp-content/uploads/2020/09/tomatoes-1200x628-facebook-1200x628.jpg",
      price: 7,
      status: true,
      amount: 1,
    },
    {
      id: 3,
      name: "Potato",
      img: "https://cdn.potatopro.com/cdn/ff/q6FzvuUKUtfesLdr3ptr_P1-OocXa1Syw4T-tmcF6Hk/1629293807/public/styles/1200_wide/public/field/image/azerbaijan-potato-varieties-1200.jpg?itok=reNjDgCn",
      price: 2,
      status: true,
      amount: 1,
    },
    {
      id: 4,
      name: "Cucumber",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR09QB1Y29ilDo9Oo43h6ZJaXHhQRnPAjOlTA&usqp=CAU",
      price: 23,
      status: false,
      amount: 1,
    },
  ]);
  const [order, setOrder] = useState([]);

  const onDelete = (product) => {
    setOrder(order.filter((f) => f.id !== product.id));
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
          <Header
            order={order}
            onAdd={onAdd}
            onRemove={onRemove}
            onDelete={onDelete}
          />
          <div className="panel">
            <Menu menu={menu} onAdd={onAdd} />
            <Order
              className="order"
              order={order}
              onAdd={onAdd}
              onRemove={onRemove}
              onDelete={onDelete}
            />
          </div>
        </div>
    </>
  );
}

export default App;
