import React, { useEffect, useState, useRef } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  boxcontainer: {
    backgroundColor: theme.palette.background.paper,
    padding: "0",
    borderRadius: "20px",
    "&.shadow": {
      boxShadow: "rgba(0, 0, 0, 0.16) 0px 0px 4px;",
    },
  },
  progresscontainer: {
    width: "100%",
    height: "0.3em",
    backgroundColor: theme.palette.grey[500],
    borderRadius: "3px",
  },
  progressbar: {
    marginTop: "0.3em",
    height: "0.3em",
    backgroundColor: theme.palette.secondary.main,
    boxShadow: "0 0 5px rgba(0, 0, 0, .2)",
    borderRadius: "3px",
    width: "0px",
    transition: "width 1.7s",
  },
  flexbetween: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  percent: {
    fontSize: "0.8em",
    color: theme.palette.grey[500],
  },
  marginTop: {
    marginTop: "1em",
  },
  title: {
    fontWeight: "500",
  },
  subtitle: {
    color: theme.palette.grey[600],
    marginLeft: "0.3rem",
  },
  titlecontainer: {
    display: "flex",
    alignItems: "baseline",
  },
}));

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    let id = setInterval(() => {
      savedCallback.current();
    }, delay);
    return () => clearInterval(id);
  }, [delay]);
}

const ProgressBar = ({ title, subtitle, percent, margin }) => {
  const classes = useStyle();
  const [state, setState] = useState(false);
  const [percentLoader, setPercentLoader] = useState(0);

  // Trigger growth of percent value
  useInterval(() => {
    if (percentLoader < percent) {
      setPercentLoader(percentLoader + 1);
    }
  }, 10);

  // Trigger growth of progressbar
  useEffect(() => {
    setState(true);
  }, []);

  return (
    <Box className={margin ? classes.marginTop : ""}>
      <Box className={classes.flexbetween}>
        <Box className={classes.titlecontainer}>
          <Box className={classes.title}>{title}</Box>
          <Typography variant="caption" className={classes.subtitle}>
            {subtitle}
          </Typography>
        </Box>
        <Box className={classes.percent}>{percentLoader}%</Box>
      </Box>
      <Box>
        <Box className={classes.progresscontainer}>
          <Box
            className={classes.progressbar}
            style={{ width: state ? `${percent}%` : "0" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ProgressBar;
