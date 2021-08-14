import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useHistory, useLocation } from "react-router";

const NavBar = () => {
  const [value, setValue] = useState(0);
  const history = useHistory();
  const location = useLocation();
  const handleChange = (_e, newValue) => {
    setValue(newValue);
  };

  const handleNavigation = (path) => {
    history.push(`/${path}`);
  }
  useEffect(() => {
    if (location.pathname === '/') {
      setValue(0)
    } else {
      setValue(1)
    }
  }, [location])


  return (
    <AppBar position="static" color="transparent" style={{ position: "fixed", top: 0 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Navigation"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Home" index={0} onClick={() => handleNavigation("")} />
        <Tab label="Favorites" index={1} onClick={() => handleNavigation("Favorite")} />
      </Tabs>
    </AppBar>
  );
};

export default NavBar;
