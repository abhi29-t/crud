import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import { NavLink } from "react-router-dom";

const pages = [
  { title: "Home", link: "/home" },
  { title: "Students", link: "/documents" },
];

const Header = () => {
  return (
    <AppBar position="static" className="Header">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* // LOGO */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            CRUD-TW
          </Typography>

          {/* // MENU ITEMS */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <NavLink
                key={page.title}
                style={{
                  margin: "0 .5rem",
                  color: "white",
                  display: "block",
                  textDecoration: "none",
                }}
                to={page.link}
              >
                {page.title}
              </NavLink>
            ))}
          </Box>

          {/* // Account Button */}
          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
