import { Box, List, ListItem, ListItemButton } from "@mui/material";

import StyledLink from "../../Components/StyledLink";
import { Outlet } from "react-router-dom";

const AdminPage = () => {
  return (
    <Box
      sx={{
        height: "92vh",
        boxSizing: "border-box",
        borderRadius: "0.5%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          height: "100%",
        }}
      >
        <Box
          sx={{
            height: "100%",
            paddingRight: "1rem",
          }}
        >
          <List>
            {["Dashboard", "Customers", "Products", "Orders"].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <StyledLink to={`${text}`}>{text}</StyledLink>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        <Outlet />
      </Box>
    </Box>
  );
};
export default AdminPage;
