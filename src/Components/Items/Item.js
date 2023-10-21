import { useState } from "react";

const Item = (props) => {
  let price = 0;
  const [change, setChange] = useState();
  const handleRemove = (i) => {
    localStorage.removeItem(i);
  };

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {props.receivedData.map((item) => {
          price += Number(item.price);
          return (
            <div key={item.id}>
              <li>
                {item.price}-{item.name}-
                <button onClick={() => handleRemove(item.Id)}>Delete</button>
              </li>
            </div>
          );
        })}
      </ul>
      <h3>Total Value Worth of Product: Rs {price}</h3>
    </div>
  );
};
export default Item;
