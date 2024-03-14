import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import FlexBetween from "../../../../Components/FlexBetween";
import { useAddProductMutation } from "../../../../features/productsApiSlice";

const AddProduct = () => {
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [name, setName] = useState("");

  const [
    addProduct,
    { isLoading, isSuccess, isError, error: adminProductError },
  ] = useAddProductMutation();

  if (isLoading) {
    return <h1>is Loading</h1>;
  }
  const submitHandler = async (e) => {
    console.log("handler clicked");
    e.preventDefault();
    await addProduct({ price, stock, name });
  };

  return (
    <Box component="form" onSubmit={submitHandler} sx={{ width: "20%" }}>
      <FlexBetween
        sx={{ flexDirection: "column", gap: "1rem", padding: "1rem" }}
      >
        <TextField
          required
          name="price"
          label="Name"
          value={name}
          helperText={adminProductError?.data?.map(
            (e) => e.key == "Name" && e.value
          )}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        />
        <TextField
          required
          name="price"
          label="Price"
          value={price}
          helperText={adminProductError?.data?.map(
            (e) => e.key == "Price" && e.value
          )}
          onChange={(e) => setPrice(e.target.value)}
          fullWidth
        />
        <TextField
          required
          label="Stock"
          value={stock}
          helperText={adminProductError?.data?.map(
            (e) => e.key == "Stock" && e.value
          )}
          onChange={(e) => setStock(e.target.value)}
          fullWidth
        />
        <Button type="submit" fullWidth>
          Add Product
        </Button>
      </FlexBetween>
    </Box>
  );
};
export default AddProduct;
