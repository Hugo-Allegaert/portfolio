import React, { useState, useEffect } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { useTheme } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const useStyle = makeStyles((theme) => ({
  boxcontainer: {
    backgroundColor: theme.palette.background.light,
    alignSelf: "baseline",
    borderRadius: "20px",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 0px 4px;",
    padding: theme.spacing(2),
  },
  boxtitles: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: theme.palette.secondary.main,
  },
  boxcontent: {
    maxHeight: "0",
    transition: "max-height 500ms ease-out",
    overflow: "hidden",
  },
  uncollapse: {
    maxHeight: "1000px",
  },
  collapse: {
    maxHeight: "0px",
  },
  marginLeft: {
    marginLeft: theme.spacing(2),
  },
  marginTop: {
    marginTop: theme.spacing(2),
  },
  collapsebtn: {
    marginLeft: theme.spacing(2),
    transition: "transform 300ms linear !important",
    cursor: "pointer",

    "&.rotate": {
      transform: "rotate(180deg)",
    },
  },
}));

const CollapsibleBox = ({ title, subtitle, icon, children }) => {
  const classes = useStyle();
  const theme = useTheme();
  const [collapse, setCollapse] = useState(true);
  const [state, setState] = useState(false);

  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  // Trigger growth of box
  useEffect(() => {
    if (collapse) {
      setState(false);
    } else {
      setState(true);
    }
  }, [collapse]);

  return (
    <Box className={classes.boxcontainer}>
      <Box className={classes.boxtitles}>
        {icon}
        <Box className={classes.marginLeft}>
          <Typography variant="body1" style={{ fontWeight: "bold" }}>
            {title}
          </Typography>
          <Typography
            variant="caption"
            style={{ color: theme.palette.grey["500"] }}
          >
            {subtitle}
          </Typography>
        </Box>
        <ExpandMoreIcon
          className={`${classes.collapsebtn} ${!collapse ? "rotate" : ""}`}
          onClick={handleCollapse}
        />
      </Box>
      <Box
        className={`${classes.boxcontent} ${
          state ? classes.uncollapse : classes.collapse
        }`}
      >
        {collapse === false ? (
          <Box className={classes.marginTop}>{children}</Box>
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
};

export default CollapsibleBox;
