import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import CollapsibleBox from "./CollapsibleBox";
import { t } from "i18next";
import ProgressBar from "./ProgressBar";
import { SKILLS } from "../conf/SKILLS";

const useStyle = makeStyles((theme) => ({
  wrapper: {
    marginTop: theme.spacing(10),
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: theme.spacing(8),
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "repeat(1, 1fr)",
      gridGap: theme.spacing(5),
    },
  },
}));

const Skills = () => {
  const classes = useStyle();

  return (
    <Box className={classes.wrapper}>
      {SKILLS.map((skillCategory, index) => (
        <CollapsibleBox
            key={index}
            title={t(skillCategory.title)}
            subtitle={t(skillCategory.subtitle)}
            icon={skillCategory.icon}
          >
            {skillCategory.subskills.map((skill, skillIndex) => (
              <ProgressBar
                key={skillIndex}
                title={t(skill.title)}
                subtitle={t(skill.subtitle)}
                percent={skill.progress}
                margin={true}
              />
        ))}
        </CollapsibleBox>
      ))}
    </Box>
  );
};

export default Skills;
