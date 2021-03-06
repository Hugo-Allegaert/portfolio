import React, { useState } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import DateRangeIcon from "@mui/icons-material/DateRange";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CollapsibleBackdrop from "./ClosableBackdrop";
import { useTranslation } from "react-i18next";

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(10),
    justifyContent: "center",
  },
  timelineWrapper: {
    marginTop: theme.spacing(10),
    display: "grid",
    gridTemplateColumns: "0.8fr 2px 0.8fr",
    color: theme.palette.primary.main,
  },
  timelineMiddle: {
    background: theme.palette.secondary.main,
    "&.last": {
      height: "0",
    },
  },
  timelineDot: {
    position: "absolute",
    transform: "translateX(-45%)",
    width: "15px",
    height: "15px",
    background: theme.palette.secondary.main,
    borderRadius: "50%",
    zIndex: "1",
  },
  timelineBox: {
    margin: "-0.5em 40px 0px 40px",
    [theme.breakpoints.down("sm")]: {
      margin: "-0.5em 20px 0px 20px",
    },
    borderRadius: "10px",
    cursor: "pointer",
    "&:hover": {
      transform: "translateY(-5px)",
    },
  },
  subtitle: {
    color: theme.palette.grey[500],
  },
  timeContainer: {
    display: "flex",
    alignItems: "center",
    color: theme.palette.grey[500],
    marginTop: "1em",
  },
  btncontainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
  },
  btn: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    color: theme.palette.grey[500],
    "&.selected": {
      color: theme.palette.secondary.main,
    },
  },
  centeredLine: {
    display: "flex",
    justifyItems: "baseline",
  },
  centeredText: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  marginBottom: {
    marginBottom: theme.spacing(2),
  },
  secondaryColor: {
    color: theme.palette.secondary.main,
  },
  textBold: {
    fontWeight: "bold",
  },
}));

const TimeLineLeft = ({ title, subtitle, date, backdropContent, last }) => {
  const classes = useStyle();
  const [backdrop, setBackdrop] = useState(false);
  const { t } = useTranslation();

  const handleDropBox = (open) => {
    setBackdrop(open);
  };

  return (
    <>
      <CollapsibleBackdrop open={backdrop} setOpen={setBackdrop}>
        {backdropContent}
      </CollapsibleBackdrop>
      <div
        className={classes.timelineBox}
        onClick={() => {
          handleDropBox(true);
        }}
      >
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" className={classes.subtitle}>
          {subtitle}
        </Typography>
        <div variant="body2" className={classes.timeContainer}>
          <DateRangeIcon fontSize="small" />
          <Typography variant="body2" style={{ marginLeft: "0.5em" }}>
            {date}
          </Typography>
        </div>
        <div variant="body2" className={classes.timeContainer}>
          <Typography variant="body2" style={{ marginTop: "0" }}>
            {t("SeeMore")}
          </Typography>
          <ArrowForwardIcon
            fontSize="small"
            style={{ marginLeft: "0.5em", fontSize: "1em" }}
          />
        </div>
      </div>
      <div
        className={`${classes.timelineMiddle} ${last === true ? "last" : ""}`}
      >
        <div className={classes.timelineDot}></div>
      </div>
      <div></div>
    </>
  );
};

const TimeLineRight = ({ title, subtitle, date, backdropContent, last }) => {
  const classes = useStyle();
  const [backdrop, setBackdrop] = useState(false);
  const { t } = useTranslation();

  const handleDropBox = (open) => {
    setBackdrop(open);
  };

  return (
    <>
      <CollapsibleBackdrop open={backdrop} setOpen={setBackdrop}>
        {backdropContent}
      </CollapsibleBackdrop>
      <div></div>
      <div
        className={`${classes.timelineMiddle} ${last === true ? "last" : ""}`}
      >
        <div className={classes.timelineDot}></div>
      </div>
      <div
        className={classes.timelineBox}
        onClick={() => {
          handleDropBox(true);
        }}
      >
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" className={classes.subtitle}>
          {subtitle}
        </Typography>
        <div variant="body2" className={classes.timeContainer}>
          <DateRangeIcon fontSize="small" />
          <Typography variant="body2" style={{ marginLeft: "0.5em" }}>
            {date}
          </Typography>
        </div>
        <div variant="body2" className={classes.timeContainer}>
          <Typography variant="body2" style={{ marginTop: "0" }}>
            {t("SeeMore")}
          </Typography>
          <ArrowForwardIcon
            fontSize="small"
            style={{ marginLeft: "0.5em", fontSize: "1em" }}
          />
        </div>
      </div>
    </>
  );
};

const BackDropContent = ({ title, desc }) => {
  const { t } = useTranslation();
  const classes = useStyle();

  return (
    <Box>
      <Typography
        className={`${classes.centeredText} ${classes.marginBottom} ${classes.secondaryColor} ${classes.textBold}`}
        variant="h6"
      >
        {t(title)}
      </Typography>
      <Typography
        variant="body1"
        className={`${classes.centeredText} ${classes.marginBottom}`}
      >
        {t(desc)}
      </Typography>
    </Box>
  );
};

const Qualification = () => {
  const classes = useStyle();
  const [education, setEducation] = useState(true);
  const { t } = useTranslation();

  const handleSwitch = (val) => {
    setEducation(val);
  };

  return (
    <div className={classes.container}>
      <Box className={classes.btncontainer}>
        <div
          className={`${classes.btn} ${education ? "selected" : ""}`}
          onClick={() => {
            handleSwitch(true);
          }}
        >
          <SchoolIcon />
          <Typography variant="button" style={{ marginLeft: "0.5em" }}>
            {t("Education")}
          </Typography>
        </div>
        <div
          className={`${classes.btn} ${!education ? "selected" : ""}`}
          onClick={() => {
            handleSwitch(false);
          }}
        >
          <WorkIcon />
          <Typography variant="button" style={{ marginLeft: "0.5em" }}>
            {t("Work")}
          </Typography>
        </div>
      </Box>
      {education === true ? (
        <Box className={classes.timelineWrapper}>
          <TimeLineLeft
            title={t("BacEs")}
            subtitle={t("HighSchool") + " Benjamin Franklin - France"}
            date={"2013 - 2016"}
            backdropContent={
              <BackDropContent title="BacEs" desc="BacEsLongDesc" />
            }
          ></TimeLineLeft>
          <TimeLineRight
            title={t("EpitechGrandEcole")}
            subtitle={"Epitech - France"}
            date={"2017 - 2019"}
            backdropContent={
              <BackDropContent
                title="EpitechGrandEcole"
                desc="EpitechGrandEcoleLongDesc"
              />
            }
          ></TimeLineRight>
          <TimeLineLeft
            title={"Epitech MSC Pro"}
            subtitle={"Epitech - France"}
            date={"2020 - 2022"}
            backdropContent={
              <BackDropContent title="MSCPro" desc="MSCProLongDesc" />
            }
            last={true}
          ></TimeLineLeft>
        </Box>
      ) : (
        <Box className={classes.timelineWrapper}>
          <TimeLineLeft
            title={t("SailInstructor")}
            subtitle={"ASN Quiberon - France"}
            date={t("Summer") + " 2015 - 2021"}
            backdropContent={
              <BackDropContent
                title="SailInstructor"
                desc="SailInstructorLongDesc"
              />
            }
          ></TimeLineLeft>
          <TimeLineRight
            title={t("WorkStage1")}
            subtitle={"IDIESE - France"}
            date={"2018 - 6 " + t("Months")}
            backdropContent={
              <BackDropContent title="WorkStage1" desc="WorkStage1LongDesc" />
            }
          ></TimeLineRight>
          <TimeLineLeft
            title={
              t("FullStackDev").charAt(0).toUpperCase() +
              t("FullStackDev").slice(1)
            }
            subtitle={"Code 42 - France"}
            date={t("Alternate") + " 2020 - 2022"}
            backdropContent={
              <BackDropContent
                title={
                  t("FullStackDev").charAt(0).toUpperCase() +
                  t("FullStackDev").slice(1)
                }
                desc="AlternateLongDesc"
              />
            }
            last={true}
          ></TimeLineLeft>
        </Box>
      )}
    </div>
  );
};

export default Qualification;
