import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import CssBaseline from "@mui/material/CssBaseline";
const Layout = () => {
  return (
    <Box
      sx={{
        margin: "auto",
        height: "100vh",
        width: "80vw",
        border: "0.5px solid gray",
        boxSizing: "border-box",
        borderRadius: "0.5%",
        boxShadow: "5px 1px 35px 4px rgba(0,0,0,0.48)",
        paddingX: "2rem",
      }}
    >
      <CssBaseline />
      <Navbar />
      <Outlet />
    </Box>
  );
};
export default Layout;
