import React from "react";
import { Box, makeStyles, Typography, useTheme } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const useStyle = makeStyles((theme) => ({
  wrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "repeat(1, 1fr)",
      gridGap: theme.spacing(5),
    },
  },
  contactContainer: {
    marginTop: theme.spacing(10),
  },
  boxContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    justifySelf: "baseline",
  },
  contactTitle: {
    lineHeight: "1em",
  },
  marginLeft: {
    marginLeft: "1em",
  },
  secondaryColor: {
    color: theme.palette.grey[600],
  },
}));

const Contact = () => {
  const classes = useStyle();
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Box className={classes.contactContainer}>
      <Box className={classes.wrapper}>
        <Box className={classes.boxContainer}>
          <EmailOutlinedIcon
            sx={{ color: theme.palette.secondary.main }}
            fontSize="large"
          />
          <div className={classes.marginLeft}>
            <Typography variant="h6" className={classes.contactTitle}>
              Email
            </Typography>
            <Typography
              variant="overline"
              className={classes.secondaryColor}
              style={{ textTransform: "lowercase" }}
            >
              hugoallegaert@hotmail.fr
            </Typography>
          </div>
        </Box>
        <Box className={classes.boxContainer}>
          <CallOutlinedIcon
            sx={{ color: theme.palette.secondary.main }}
            fontSize="large"
          />
          <div className={classes.marginLeft}>
            <Typography variant="h6" className={classes.contactTitle}>
              {t("CallMe")}
            </Typography>
            <Typography className={classes.secondaryColor} variant="overline">
              07 81 74 35 79
            </Typography>
          </div>
        </Box>
        <Box className={classes.boxContainer}>
          <LinkedInIcon
            sx={{ color: theme.palette.secondary.main }}
            fontSize="large"
          />
          <div className={classes.marginLeft}>
            <Typography variant="h6" className={classes.contactTitle}>
              LinkedIn
            </Typography>
            <Typography variant="overline">
              <a
                className={classes.secondaryColor}
                href="https://www.linkedin.com/in/hugo-allegaert-4517a2174/"
              >
                Hugo ALLEGAERT
              </a>
            </Typography>
          </div>
        </Box>
        <Box className={classes.boxContainer}>
          <GitHubIcon
            sx={{ color: theme.palette.secondary.main }}
            fontSize="large"
          />
          <div className={classes.marginLeft}>
            <Typography variant="h6" className={classes.contactTitle}>
              GitHub
            </Typography>
            <Typography variant="overline">
              <a
                className={classes.secondaryColor}
                href="https://github.com/Hugo-Allegaert"
              >
                Hugo-Allegaert
              </a>
            </Typography>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
