import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useCustomTheme } from "../context/theme-context";
import ThemeSwitcher from "./ThemeSwitcher";
import { Language } from "@mui/icons-material";
import LanguageSwitcher from "./LanguageSwitcher";

const useStyle = makeStyles((theme) => ({
  menuContainer: {
    opacity: "0.85",
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.secondary.main,
    position: "fixed !important",
    right: "0",
    top: "43%",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
    transition: "all 0ms !important",

    "&:before": {
      content: '""',
      position: "absolute",
      backgroundColor: theme.palette.background.main,
      borderColor: theme.palette.background.main,
      top: "100%",
      height: "50px",
      width: "25px",
      right: "0",
      borderTopRightRadius: "25px",
      boxShadow: `0 -25px 0 0 ${theme.palette.secondary.main}`,
    },
    "&:after": {
      content: '""',
      position: "absolute",
      backgroundColor: theme.palette.background.main,
      borderColor: theme.palette.background.main,
      zIndex: "-1",
      bottom: "100%",
      height: "50px",
      width: "25px",
      right: "0",
      borderTopRightRadius: "25px",
      transform: "scaleY(-1)",
      boxShadow: `0 -25px 0 0 ${theme.palette.secondary.main}`,
    },
  },
}));

const RightMenu = () => {
  const classes = useStyle();

  return (
    <Box className={classes.menuContainer}>
      <LanguageSwitcher />
      <ThemeSwitcher />
    </Box>
  );
};

export default RightMenu;
