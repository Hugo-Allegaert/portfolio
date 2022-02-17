import React from "react";
import { Box, makeStyles, Typography, useTheme } from "@material-ui/core";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

const useStyle = makeStyles((theme) => ({
  dot: {
    height: "20px",
    width: "20px",
    borderRadius: "50%",
    display: "block",
    backgroundColor: theme.palette.secondary.main,
    marginLeft: "0.5em",
  },
  title: {
    display: "flex",
    alignItems: "baseline",
    color: theme.palette.primary.main,
  },
  wrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "repeat(1, 1fr)",
      gridGap: theme.spacing(5),
    },
  },
  mypic: {
    height: "200px",
  },
  centered: {
    display: "flex",
    justifyContent: "center",
  },
  importante: {
    backgroundColor: theme.palette.secondary.light,
    padding: "0.2em",
    fontWeight: "bold",
  },
  btncontainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(5),
    },
  },
}));

const OutlinedButton = styled(Button)(({ theme }) => ({
  color: theme.palette.secondary.main,
  borderColor: theme.palette.secondary.main,
  backgroundColor: theme.palette.background.paper,
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.primary.main,
    borderColor: theme.palette.secondary.main,
  },
}));

const ContainedButton = styled(Button)(({ theme }) => ({
  color: theme.palette.background.paper,
  borderColor: theme.palette.secondary.main,
  backgroundColor: theme.palette.secondary.main,
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.primary.main,
    borderColor: theme.palette.secondary.main,
  },
}));

const Hello = () => {
  const classes = useStyle();
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Box>
      <Box className={classes.wrapper}>
        <Box>
          <Box className={classes.title}>
            <Typography variant="h1" style={{ fontWeight: "500" }}>
              {t("Hello")}
            </Typography>
            <span className={classes.dot}></span>
          </Box>
          <Typography variant="body1">
            {t("Im")} <span className={classes.importante}>Hugo Allegaert</span>
            , {t("FullStackDev")}.
          </Typography>
        </Box>
        <Box className={classes.centered}>
          <img className={classes.mypic} src="/img/hugo.jpg" alt="moi" />
        </Box>
      </Box>
      <Box className={classes.btncontainer}>
        <OutlinedButton theme={theme} variant="outlined">
          {t("DownloadCV")}
        </OutlinedButton>
        <ContainedButton
          theme={theme}
          variant="contained"
          style={{ marginLeft: "4em" }}
          onClick={() => {
            window.location = "#qualification";
          }}
        >
          {t("AboutMe")}
        </ContainedButton>
      </Box>
    </Box>
  );
};

export default Hello;
