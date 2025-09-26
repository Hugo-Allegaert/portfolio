import React from 'react';
import { makeStyles, Typography } from "@material-ui/core";
import { IconButton } from "@mui/material";
import { useTranslation } from "react-i18next";

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

const LanguageSwitcher = () => {
  const classes = useStyle();
  const { i18n } = useTranslation();
  const langs = { fr: "FR", en: "EN" };

  const handleChangeLanguage = (e) => {
    if (i18n.language === "en") {
      i18n.changeLanguage("fr");
    } else {
      i18n.changeLanguage("en");
    }
  };

  return (
    <IconButton
      className={classes.btn}
      variant="contained"
      aria-label="up"
      onClick={handleChangeLanguage}
    >
      <Typography
        variant="button"
        className={classes.langbtn}
      >
        {langs[i18n.language]}
      </Typography>
    </IconButton>
  );
};

export default LanguageSwitcher;
