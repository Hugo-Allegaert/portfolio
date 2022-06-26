import React from "react";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { makeStyles } from "@material-ui/core";
import { IconButton } from "@mui/material";
import { useTheme } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ContainedButton } from "./CustomButtons";

const useStyle = makeStyles((theme) => ({
  subtitle: {
    color: theme.palette.grey[600],
  },
  topic: {
    color: theme.palette.grey[500],
  },
  imgContainer: {
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 255,
    maxWidth: 500,
    [theme.breakpoints.down("sm")]: {
      maxWidth: 280,
    },
    overflow: "hidden",
    padding: "0.5em",
  },
  colorPrimary: {
    color: theme.palette.primary.main,
  },
  imgSize: {
    height: 255,
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      maxHeight: 255,
      maxWidth: 290,
    },
  },
  portfolioContainer: {
    marginTop: theme.spacing(5),
    maxWidth: 500,
    [theme.breakpoints.down("sm")]: {
      maxWidth: 300,
    },
    flexGrow: 1,
  },
  descContainer: {
    backgroundColor: `${theme.palette.background.paper}  !important`,
    marginTop: "1em",
  },
  backgroundPaper: {
    background: `${theme.palette.background.paper}  !important`,
  },
  btn: {
    color: `${theme.palette.secondary.main}  !important`,
  },
  dots: {
    backgroundColor: `${theme.palette.grey[400]}  !important`,
  },
  btnActive: {
    backgroundColor: `${theme.palette.secondary.main}  !important`,
  },
}));

const projects = [
  {
    label: "ReinforcementLearning",
    desc: "ReinforcementLearningDesc",
    topic: "ReinforcementLearningTopic",
    imgPath: "/img/RL.png",
    link: "https://github.com/Hugo-Allegaert/ReinforcementLearning",
    techno: "Python, PyTorch, W&B",
  },
  {
    label: "TravelOrderResolver",
    desc: "TravelOrderResolverDesc",
    topic: "TravelOrderResolverTopic",
    imgPath: "/img/travel-order.png",
    link: "https://github.com/Hugo-Allegaert/TravelOrderResolver",
    techno: "Docker, Python, ViewJs, Spacy",
  },
  {
    label: "IRC",
    desc: "IRCDesc",
    topic: "IRCTopic",
    imgPath: "/img/irc.png",
    link: "https://github.com/Hugo-Allegaert/MyIRC",
    techno: "Docker, NodeJS + Express, Angular",
  },
  {
    label: "Epicture",
    desc: "EpictureDesc",
    topic: "EpictureTopic",
    imgPath: "/img/epicture.png",
    link: "https://github.com/Hugo-Allegaert/Epicture",
    techno: "Java, Android Studio, API REST",
  },
];

const Swipe = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = projects.length;
  const classes = useStyle();
  const theme = useTheme();
  const { t } = useTranslation();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box className={classes.portfolioContainer}>
      <SwipeableViews
        axis={"x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {projects.map((step, index) => (
          <div key={step.label} className={classes.imgContainer}>
            {Math.abs(activeStep - index) <= 2 ? (
              <div>
                <Paper
                  elevation={4}
                  component="img"
                  src={step.imgPath}
                  alt={step.label}
                  className={classes.imgSize}
                />
              </div>
            ) : null}
          </div>
        ))}
      </SwipeableViews>
      <Paper square elevation={0} className={classes.descContainer}>
        <Typography
          variant="caption"
          display="block"
          gutterBottom
          className={classes.topic}
        >
          {t(projects[activeStep].topic)}
        </Typography>
        <Typography
          variant="h6"
          className={classes.backgroundPaper}
          sx={{
            color: theme.palette.primary.main,
            transition: "inherit",
          }}
        >
          {t(projects[activeStep].label)}
        </Typography>
        <Typography variant="body2" className={classes.subtitle}>
          {t(projects[activeStep].desc)}
        </Typography>
        <Typography
          variant="overline"
          display="block"
          className={classes.colorPrimary}
        >
          {projects[activeStep].techno}
        </Typography>
        <ContainedButton
          theme={theme}
          variant="contained"
          sx={{ marginTop: "1em" }}
          onClick={() => window.open(projects[activeStep].link, "_blank")}
          endIcon={<ArrowForwardIcon />}
        >
          {t("Demo")}
        </ContainedButton>
      </Paper>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        classes={{
          root: classes.backgroundPaper,
          dotActive: classes.btnActive,
          dot: classes.dots,
        }}
        nextButton={
          <IconButton
            aria-label="back"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx={{
              color: theme.palette.secondary.main,
            }}
            size="large"
          >
            <KeyboardArrowRight />
          </IconButton>
        }
        backButton={
          <IconButton
            aria-label="back"
            onClick={handleBack}
            disabled={activeStep === 0}
            size="large"
            sx={{
              color: theme.palette.secondary.main,
            }}
          >
            <KeyboardArrowLeft />
          </IconButton>
        }
      />
    </Box>
  );
};

export default Swipe;
