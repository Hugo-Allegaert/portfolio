import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { IconButton } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";

const useStyle = makeStyles((theme) => ({
  marginLeft: {
    marginLeft: "1em",
  },
  secondaryColor: {
    color: theme.palette.grey[600],
  },
  footerContainer: {
    padding: "2em 1em 0.5em 1em",
    backgroundColor: theme.palette.background.light,
    color: theme.palette.grey[800],
    "& a": {
      textDecoration: "none",
      lineHeight: "2em",
    },
  },
  alignCenter: {
    display: "flex",
    justifyContent: "center",
  },
  upBtn: {
    position: "fixed !important",
    right: "0.5em",
    bottom: "0.5em",
    borderRadius: "10px !important",
    color: `${theme.palette.background.paper} !important`,
    backgroundColor: `${theme.palette.secondary.main} !important`,
    "&:hover": {
      transform: "translateY(-5%)",
    },
  },
}));

const Footer = () => {
  const classes = useStyle();
  const { t } = useTranslation();

  return (
    <Box className={classes.footerContainer}>
      <Typography variant="h6">Hugo ALLEGAERT</Typography>
      <br />
      <Typography variant="subtitle2">
        <a href="#skills">{t("Skills")}</a>
      </Typography>
      <Typography variant="subtitle2">
        <a href="#qualification">{t("Qualification")}</a>
      </Typography>
      <Typography variant="subtitle2">
        <a href="#portfolio">{t("Portfolio")}</a>
      </Typography>
      <Typography variant="subtitle2">
        <a href="#contact">{t("Contact")}</a>
      </Typography>
      <Typography variant="caption" className={classes.alignCenter}>
        ® HugoAllegaert, All right reserved
      </Typography>
      <IconButton
        href="#hello"
        className={classes.upBtn}
        variant="contained"
        aria-label="up"
      >
        <ArrowUpward fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default Footer;
