import React, { useEffect } from "react";
import "./Header.css";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function Header({ setFilterData, filterData, data }) {
  const [filter, setFilter] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [location, setLocation] = React.useState("");

  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };
  const [when, setWhen] = React.useState("");

  const handleChangewhen = (event) => {
    setWhen(event.target.value);
  };
  const [price, setPrice] = React.useState("");

  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };
  const [property, setProperty] = React.useState("");

  const handleChangeProperty = (event) => {
    setProperty(event.target.value);
  };
  useEffect(() => {
    let tempData = [...data];
    if (property) {
      tempData = tempData.filter((item) => item.property == property);
    }
    if (price) {
      let priceArray = price.split("-");
      let minimumPrice = parseInt(priceArray[0]);
      let maximumPrice = parseInt(priceArray[1]);
      tempData = tempData.filter(
        (item) => item.price >= minimumPrice && item.price <= maximumPrice
      );
    }
    if (location) {
      tempData = tempData.filter((item) => item.location == location);
    }
    setFilterData(tempData);
    setFilter(false);
  }, [filter]);
  return (
    <div className="header__container">
      <div className="header__title">
        <h1>Search Properties for Rent</h1>
        <div className="header__search">
          <select className="header__select">
            <option value="">Search with search bar</option>
          </select>
        </div>
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
            <InputLabel id="demo-simple-select-label">Location</InputLabel>
            <Select
              sx={{
                border: "none",
              }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={location}
              label="Location"
              onChange={handleChangeLocation}
            >
              <MenuItem value={"New York,USA"}>New york,USA</MenuItem>
              <MenuItem value={"Texas,USA"}>Texas,USA</MenuItem>
              <MenuItem value={"California,USA"}>California,USA</MenuItem>
            </Select>
          </FormControl>

           <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Select Move-in Date"
        value={value}
        onChange={(newValue) => {
          console.log("date",newValue);
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider> 
          <FormControl style={{ flex: "auto" }}>
            <InputLabel id="demo-simple-select-label">Price</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={price}
              label="Price"
              onChange={handleChangePrice}
            >
              <MenuItem value={"500-2000"}>$500-$2000</MenuItem>
              <MenuItem value={"2000-5000"}>$2000-$5000</MenuItem>
              <MenuItem value={"5000-8000"}>$5000-$8000</MenuItem>
            </Select>
          </FormControl>
          <FormControl style={{ flex: "auto" }}>
            <InputLabel id="demo-simple-select-label">Property Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={property}
              label="Property Type"
              onChange={handleChangeProperty}
            >
              <MenuItem value={"House"}>House</MenuItem>
              <MenuItem value={"Bunglow"}>Bunglow</MenuItem>
              <MenuItem value={"Flat"}>Flat</MenuItem>
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
            onClick={() => setFilter(true)}
          >
            Search
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default Header;
