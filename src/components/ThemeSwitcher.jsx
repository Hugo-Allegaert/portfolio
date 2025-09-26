import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core";
import { IconButton } from "@mui/material";
import { useCustomTheme } from "../context/theme-context";

const useStyle = makeStyles((theme) => ({
  btn: {
    color: `${theme.palette.background.paper} !important`,
    backgroundColor: `${theme.palette.secondary.main} !important`,
    "&:hover": {
      backgroundColor: `${theme.palette.secondary.light} !important`,
      color: `${theme.palette.primary.main} !important`,
      borderColor: `${theme.palette.primary.main} !important`,
    },
  },
}));

const ThemeSwitcher = () => {
  const classes = useStyle();
  const { currentTheme, setTheme } = useCustomTheme();
  const [checked, setChecked] = useState(currentTheme === "normal" ? true : false);

  useEffect(() => {
    setChecked(currentTheme === "normal" ? true : false);
  }, [currentTheme]);
  
  const handleThemeChange = () => {
    if (currentTheme === "normal") {
      setTheme("dark");
    } else {
      setTheme("normal");
    }
  };

  return (
    <IconButton
      className={classes.btn}
      variant="contained"
      aria-label="up"
      onClick={handleThemeChange}
      >
      <input
        id="toggle"
        className="toggle"
        type="checkbox"
        checked={checked}
        onChange={handleThemeChange}
      />
    </IconButton>
  );
};

export default ThemeSwitcher;
