import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "95vh",
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    height: "20px",
    width: "20px",
    [theme.breakpoints.down("sm")]: {
      height: "15px",
      width: "15px",
    },
    borderRadius: "50%",
    display: "block",
    backgroundColor: theme.palette.secondary.main,
    marginLeft: "0.5em",
  },
  title: {
    display: "flex",
    alignItems: "baseline",
    color: theme.palette.primary.main,

    "& > h2": {
      fontWeight: "500",
      [theme.breakpoints.down("sm")]: {
        fontSize: "3rem",
      },
    },
  },
  titlecontainer: {
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

const Section = ({ id, title, subtitle, children }) => {
  const classes = useStyle();

  return (
    <Box className={classes.container} id={id}>
      {title && (
        <Box className={classes.titlecontainer}>
          <Box className={classes.title}>
            <Typography variant="h2">{title}</Typography>
            <span className={classes.dot}></span>
          </Box>
          <Typography>{subtitle}</Typography>
        </Box>
      )}
      {children}
    </Box>
  );
};

export default Section;
