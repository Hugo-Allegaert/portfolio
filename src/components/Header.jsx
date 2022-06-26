import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
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
    zIndex: "100",
  },
  langbtn: {
    padding: "0",
    color: theme.palette.secondary.main,
    fontWeight: "bold",
    cursor: "pointer",
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

  const langs = { fr: "FR", en: "EN" };

  const handleThemeChange = () => {
    if (currentTheme === "normal") {
      setTheme("dark");
    } else {
      setTheme("normal");
    }
  };

  const handleChangeLanguage = (e) => {
    if (i18n.language === "en") {
      i18n.changeLanguage("fr");
    } else {
      i18n.changeLanguage("en");
    }
  };

  return (
    <Box className={classes.header}>
      <Typography
        variant="button"
        className={classes.langbtn}
        onClick={handleChangeLanguage}
      >
        {langs[i18n.language]}
      </Typography>
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
