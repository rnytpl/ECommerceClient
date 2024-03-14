import { Container, Box, Button, styled } from "@mui/material";
import FlexBetween from "./FlexBetween";
import Logo from "./Logo";
import { Search } from "@mui/icons-material/";
import { Link } from "react-router-dom";
import StyledLink from "./StyledLink";
const Navbar = () => {
  return (
    <Container sx={{ height: "4rem", paddingY: "1rem", margin: "auto" }}>
      <FlexBetween>
        <FlexBetween
          sx={{
            gap: "1rem",
          }}
        >
          <Logo />
          <StyledLink to="/home">Home</StyledLink>
          <StyledLink to="/products">Products</StyledLink>
          <StyledLink to="/orders">Basket</StyledLink>
          <StyledLink to="/admin">Admin Panel</StyledLink>
        </FlexBetween>
        <FlexBetween>
          <Search />
          <Button variant="outlined">Search</Button>
        </FlexBetween>
      </FlexBetween>
    </Container>
  );
};
export default Navbar;
