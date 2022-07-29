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
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {RiHomeSmile2Fill} from "react-icons/ri";
import './Navbar.css';

const pages = ["Rent", "Buy", "Sell"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [age, setAge] = React.useState("");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
 const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

 const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <AppBar position="static">
      <Container
        style={{
          backgroundColor: "White",
        }}
        maxWidth="xl"
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
              color: "#8c52ff",
              textDecoration: "none",
            }}
          >
            <div className="nav__icon">
            <RiHomeSmile2Fill/>
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
              color: "#8c52ff",
              textDecoration: "none",
            }}
          >
            <div className="nav__icon">
            <RiHomeSmile2Fill/>
            </div>
            Estatery
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#8c52ff",
                  display: "block",
                  border: "1px solid white",
                }}
              >
                {page}
              </Button>
            ))}
            <div>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>Manage Property</em>
                  </MenuItem>
                  <MenuItem></MenuItem>
                  <MenuItem></MenuItem>
                  <MenuItem></MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>Resources</em>
                  </MenuItem>
                  <MenuItem></MenuItem>
                  <MenuItem></MenuItem>
                  <MenuItem></MenuItem>
                </Select>
              </FormControl>
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
