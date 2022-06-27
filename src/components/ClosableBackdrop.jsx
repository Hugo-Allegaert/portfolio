import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { Backdrop } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

const useStyle = makeStyles((theme) => ({
  boxcontainer: {
    backgroundColor: theme.palette.background.light,
    borderRadius: "20px",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 0px 4px;",
    padding: theme.spacing(2),
    width: "40%",
    [theme.breakpoints.down("sm")]: {
      width: "60%",
    },
  },
  boxtitles: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: theme.palette.secondary.main,
  },
  btncontainer: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
    "& > button": {
      color: theme.palette.secondary.main,
    },
  },
}));

const CollapsibleBackdrop = ({ open, setOpen, children }) => {
  const classes = useStyle();

  return (
    <Backdrop open={open} style={{ zIndex: "100" }}>
      <Box className={classes.boxcontainer}>
        <div className={classes.btncontainer}>
          <IconButton
            aria-label="delete"
            onClick={() => {
              setOpen(false);
            }}
            style={{ padding: "0" }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </div>
        {children}
      </Box>
    </Backdrop>
  );
};

export default CollapsibleBackdrop;
