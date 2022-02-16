import React, { useState } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { useTheme } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const useStyle = makeStyles((theme) => ({
  boxcontainer: {
    backgroundColor: theme.palette.background.paper,
    padding: "0",
    borderRadius: "20px",
    "&.shadow": {
      boxShadow: "rgba(0, 0, 0, 0.16) 0px 0px 4px;",
    },
  },
  boxtitles: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: theme.palette.secondary.main,

    backgroundColor: theme.palette.background.light,
    borderRadius: "20px 20px 0 0",
    padding: theme.spacing(2),
    "&.fullradius": {
      borderRadius: "20px",
      boxShadow: "rgba(0, 0, 0, 0.16) 0px 0px 4px;",
    },
  },
  boxcontent: {
    backgroundColor: theme.palette.background.light,
    borderRadius: "0 0 20px 20px",
    padding: theme.spacing(2),
  },
  marginLeft: {
    marginLeft: theme.spacing(2),
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

  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <Box className={`${classes.boxcontainer} ${!collapse ? "shadow" : ""}`}>
      <Box className={`${classes.boxtitles} ${collapse ? "fullradius" : ""}`}>
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
      {collapse === false && (
        <Box className={classes.boxcontent}>{children}</Box>
      )}
    </Box>
  );
};

export default CollapsibleBox;
