import "./App.css";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Order from "./components/Order/Order";
import Edit from "./components/Edit/Edit";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Menu />
        <Order />
        <Edit />
      </div>
    </>
  );
}

export default App;
