import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { RiHomeSmile2Fill } from "react-icons/ri";
import "./Navbar.css";

const pages = ["Rent", "Buy", "Sell"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container
        style={{
          backgroundColor: "White",
        }}
        maxWidth="auto"
      >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              color: "black",
              textDecoration: "none",
              alignItems:"center"
            }}
          >
            <div className="nav__icon">
              <RiHomeSmile2Fill />
            </div>
            Estatery
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "black",
              textDecoration: "none",
            }}
          >
            <div className="nav__icon">
              <RiHomeSmile2Fill />
            </div>
            Estatery
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" },alignItems:"center" }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#8c52ff",
                  display: "block",
                }}
              >
                {page}
              </Button>
            ))}
            <div className="nav__selectdiv">
              <select className="nav__select">
                <option value="">Manage property</option>
              </select>
              <select className="nav__select1">
                <option value="">Resources</option>
              </select>
            </div>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              style={{
                backgroundColor: "white",
                color: "#8c52ff",
                marginRight: "1rem",
              }}
              variant="outlined"
            >
              Login
            </Button>
            <Button
              style={{
                backgroundColor: "#8c52ff",
                color: "white",
              }}
              variant="contained"
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
