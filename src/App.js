import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Item from "./Components/Items/Item";

function App() {
  const [data, setData] = useState([]);
  const userData = (uId, uPrice, uName) => {
    setData((prevData) => {
      return [
        ...prevData,
        { Id: uId, price: uPrice, name: uName, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div className="App">
      <Form user={userData} />
      <Item receivedData={data} />
    </div>
  );
}

export default App;
