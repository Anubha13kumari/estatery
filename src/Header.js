import React from "react";
import "./Header.css";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Header() {
  const [location, setLocation] = React.useState("");

  const handleChangelocation = (event) => {
    setLocation(event.target.value);
  };
  const [when, setWhen] = React.useState("");

  const handleChangewhen = (event) => {
    setWhen(event.target.value);
  };
  const [price, setPrice] = React.useState("");

  const handleChangeprice = (event) => {
    setPrice(event.target.value);
  };
  const [property, setProperty] = React.useState("");

  const handleChangeproperty = (event) => {
    setProperty(event.target.value);
  };

  return (
    <div className="header__container">
      <div className="header__title">
        <h1>Search Properties for Rent</h1>
        <div className="header__search"></div>
      </div>
      <div className="header__filtercontainer">
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            gap: "1rem",
            width: "100%",
          }}
        >
          <FormControl style={{ flex: "auto" }}>
            <InputLabel  id="demo-simple-select-label">Location</InputLabel>
            <Select
              sx={{
                border: "none",
                }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={location}
              label="Location"
              onChange={handleChangelocation}
            >
              <MenuItem value={"New York USA"}>New york,USA</MenuItem>
              <MenuItem value={"Texas USA"}>Texas,USA</MenuItem>
              <MenuItem value={"California USA"}>California,USA</MenuItem>
            </Select>
          </FormControl>

          <FormControl style={{ flex: "auto" }}>
            <InputLabel id="demo-simple-select-label">When</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={when}
              label="When"
              onChange={handleChangewhen}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl style={{ flex: "auto" }}>
            <InputLabel id="demo-simple-select-label">Price</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={price}
              label="Price"
              onChange={handleChangeprice}
            >
              <MenuItem value={"$500-$2000"}>$500-$2000</MenuItem>
              <MenuItem value={"$2000-$5000"}>$2000-$5000</MenuItem>
              <MenuItem value={"$5000-$8000"}>$5000-$8000</MenuItem>
            </Select>
          </FormControl>
          <FormControl style={{ flex: "auto" }}>
            <InputLabel id="demo-simple-select-label">Property Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={property}
              label="Property Type"
              onChange={handleChangeproperty}
            >
              <MenuItem value={"Houses"}>Houses</MenuItem>
              <MenuItem value={"Bunglow"}>Bunglow</MenuItem>
              <MenuItem value={"Flats"}>Flats</MenuItem>
            </Select>
          </FormControl>
          <Button
            style={{
              backgroundColor: "#8c52ff",
              color: "white",
              width: "8vw",
              height: "7vh",
            }}
            variant="contained"
          >
            Search
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default Header;
