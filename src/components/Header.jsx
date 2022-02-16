import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { useCustomTheme } from "../context/theme-context";
import { useTranslation } from "react-i18next";

const useStyle = makeStyles((theme) => ({
  header: {
    width: "-webkit-fill-available",
    display: "flex",
    padding: "5px",
    alignContent: "center",
    justifyContent: "space-between",
    position: "fixed",
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.background.paper,
  },
  customselect: {
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.background.paper,
    borderColor: theme.palette.background.paper,
    fontWeight: "bold",
  },
}));

const Header = () => {
  const classes = useStyle();
  const { currentTheme, setTheme } = useCustomTheme();
  const { i18n } = useTranslation();

  const handleThemeChange = () => {
    if (currentTheme === "normal") {
      setTheme("dark");
    } else {
      setTheme("normal");
    }
  };

  const handleChangeLanguage = (e) => {
    const languageValue = e.target.value;
    i18n.changeLanguage(languageValue);
  };

  // TODO check for better btn  click
  return (
    <Box className={classes.header}>
      <Box>
        <select
          className={classes.customselect}
          value={i18n.language}
          onChange={handleChangeLanguage}
        >
          <option value="en">EN</option>
          <option value="fr">FR</option>
        </select>
      </Box>
      <Box>
        <input
          id="toggle"
          className="toggle"
          type="checkbox"
          defaultChecked={currentTheme === "normal" ? true : false}
          onClick={handleThemeChange}
        ></input>
      </Box>
    </Box>
  );
};

export default Header;
