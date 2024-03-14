import { Box } from "@mui/material";
import AddProduct from "./AddProduct";
import ListProduct from "./ListProduct";

const AdminProducts = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
      }}
    >
      <AddProduct />
      <ListProduct />
    </Box>
  );
};
export default AdminProducts;
