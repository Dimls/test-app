import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import BreedSearch from "./BreedSearch";

const NavBar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="BREEDS" />
          <Tab label="Item Two" />
        </Tabs>
      </AppBar>
      <Box p={3} className="box-content">
        {value === 0 ? <BreedSearch /> : ""}
      </Box>
    </>
  );
};

export default NavBar;
