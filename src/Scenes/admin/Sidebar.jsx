import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Container } from "@mui/material";
import FlexBetween from "../../Components/FlexBetween";
import StyledLink from "../../Components/StyledLink";

export default function Sidebar() {
  return (
    <Container
      sx={{ border: "1px solid gray", height: "92vh", boxSizing: "border-box" }}
    >
      <FlexBetween sx={{ height: "100%" }}>
        <Box
          sx={{
            borderRight: "1px solid gray",
            height: "100%",
            paddingRight: "1rem",
          }}
        >
          <List>
            {["Dashboard", "Customers", "Products", "Orders"].map(
              (text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <StyledLink to={`${text}`}>{text}</StyledLink>
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
        </Box>
      </FlexBetween>
    </Container>
  );
}
