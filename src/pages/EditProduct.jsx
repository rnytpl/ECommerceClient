import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import {
  useGetProductByIdQuery,
  useEditProductMutation,
} from "../features/productsApiSlice";

const EditProduct = () => {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const { data } = useGetProductByIdQuery(id);
  const [editProduct, { isLoading }] = useEditProductMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    await editProduct({ id, name, price, stock });
  };

  return (
    <>
      {isLoading && <h1>isLoading</h1>}

      <form onSubmit={submitHandler}>
        <label name="name" />
        <input
          type="text"
          placeholder={data.name}
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <label name="stock" />
        <input
          type="text"
          placeholder={data.stock}
          value={stock}
          name="stock"
          onChange={(e) => setStock(e.target.value)}
        />
        <label name="price" />
        <input
          type="text"
          placeholder={data.price}
          value={price}
          name="price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <Link to="/">Home</Link>
    </>
  );
};
export default EditProduct;
