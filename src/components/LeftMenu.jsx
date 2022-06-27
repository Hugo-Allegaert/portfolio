import React from "react";
import { Box, makeStyles, useTheme } from "@material-ui/core";
import { IconButton } from "@mui/material";
import {
  ColorLensRounded,
  MailOutlineOutlined,
  Person,
  SchoolOutlined,
} from "@mui/icons-material";
import { useState, useEffect } from "react";

const useStyle = makeStyles((theme) => ({
  menuContainer: {
    opacity: "0.85",
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.secondary.main,
    position: "fixed !important",
    left: "0",
    top: "40%",
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px",
    transition: "all 0ms !important",

    "&:before": {
      content: '""',
      position: "absolute",
      backgroundColor: theme.palette.background.main,
      borderColor: theme.palette.background.main,
      bottom: "-50px",
      height: "50px",
      width: "25px",
      borderTopLeftRadius: "25px",
      boxShadow: `0 -25px 0 0 ${theme.palette.secondary.main}`,
    },
    "&:after": {
      content: '""',
      position: "absolute",
      backgroundColor: theme.palette.background.main,
      borderColor: theme.palette.background.main,
      zIndex: "-1",
      bottom: "144px",
      height: "50px",
      width: "25px",
      borderTopLeftRadius: "25px",
      transform: "scaleY(-1)",
      boxShadow: `0 -25px 0 0 ${theme.palette.secondary.main}`,
    },
  },
  marginLeft: {
    marginLeft: "1em",
  },
  secondaryColor: {
    color: theme.palette.grey[600],
  },
  alignCenter: {
    display: "flex",
    justifyContent: "center",
  },
  btn: {
    color: `${theme.palette.background.paper} !important`,
    backgroundColor: `${theme.palette.secondary.main} !important`,
    "&:hover": {
      backgroundColor: `${theme.palette.secondary.light} !important`,
      color: `${theme.palette.primary.main} !important`,
      borderColor: `${theme.palette.primary.main} !important`,
    },
  },
  btnIcon: {},
}));

const LeftMenu = () => {
  const classes = useStyle();
  const theme = useTheme();
  const heightWindow = window.innerHeight - 40;
  const section = {
    home: 0,
    skills: heightWindow,
    qualification: heightWindow * 2,
    portfolio: heightWindow * 3,
    contact: heightWindow * 4,
  };

  const [scrollY, setScrollY] = useState(0);

  function logit() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  return (
    <Box className={classes.menuContainer}>
      <IconButton
        className={classes.btn}
        href="#skills"
        variant="contained"
        aria-label="up"
      >
        <Person
          fontSize="small"
          style={{
            color:
              scrollY >= section.skills && scrollY < section.qualification
                ? theme.palette.primary.main
                : theme.palette.background.paper,
          }}
        />
      </IconButton>
      <IconButton
        className={classes.btn}
        href="#qualification"
        variant="contained"
        aria-label="up"
      >
        <SchoolOutlined
          fontSize="small"
          style={{
            color:
              scrollY >= section.qualification && scrollY < section.portfolio
                ? theme.palette.primary.main
                : theme.palette.background.paper,
          }}
        />
      </IconButton>
      <IconButton
        className={classes.btn}
        href="#portfolio"
        variant="contained"
        aria-label="up"
      >
        <ColorLensRounded
          className={classes.btnIcon}
          fontSize="small"
          style={{
            color:
              scrollY >= section.portfolio && scrollY < section.contact
                ? theme.palette.primary.main
                : theme.palette.background.paper,
          }}
        />
      </IconButton>
      <IconButton
        className={classes.btn}
        href="#contact"
        variant="contained"
        aria-label="up"
      >
        <MailOutlineOutlined
          fontSize="small"
          style={{
            color:
              scrollY >= section.contact
                ? theme.palette.primary.main
                : theme.palette.background.paper,
          }}
        />
      </IconButton>
    </Box>
  );
};

export default LeftMenu;
