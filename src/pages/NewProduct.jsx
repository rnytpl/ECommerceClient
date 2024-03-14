import { useState } from "react";
import { useAddProductMutation } from "../features/productsApiSlice";
import { Link } from "react-router-dom";

const NewProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const [addProduct, { isLoading }] = useAddProductMutation();

  //   const canSave = [name, stock, price].every(Boolean) && !isLoading;

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await addProduct({ name, price, stock }).unwrap();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {isLoading && <h1>isLoading</h1>}
      <form onSubmit={submitHandler}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label>Stock</label>
        <input
          type="text"
          name="stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        ></input>
        <label>Price</label>
        <input
          type="text"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
      <div>NewPost</div>
      <Link to="/">Home</Link>
    </>
  );
};
export default NewProduct;
