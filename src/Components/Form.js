import react, { useState } from "react";
const Form = (props) => {
  const [id, setId] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");

  const idHandeler = (event) => {
    setId(event.target.value);
  };

  const priceHandeler = (event) => {
    setPrice(event.target.value);
  };

  const nameHandeler = (event) => {
    setName(event.target.value);
  };

  const submitHandeler = (event) => {
    event.preventDefault();
    localStorage.setItem(
      id,
      `{ productId: ${id}, productPrice: ${price}, productName: ${name} }`
    );
    props.user(id, price, name);
  };
  return (
    <div>
      <form onSubmit={submitHandeler}>
        Product Id:
        <input type="number" onChange={idHandeler} />
        Product Price:
        <input type="number" onChange={priceHandeler} />
        Product Name:
        <input type="text" onChange={nameHandeler} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Form;
