import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import CollapsibleBox from "./CollapsibleBox";
import { t } from "i18next";
import StorageIcon from "@mui/icons-material/Storage";
import CodeIcon from "@mui/icons-material/Code";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import SettingsIcon from "@mui/icons-material/Settings";
import ProgressBar from "./ProgressBar";

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
      <CollapsibleBox
        title={t("BackDev")}
        subtitle={t("MoreThan")}
        icon={<StorageIcon />}
      >
        <ProgressBar title={"PHP"} subtitle={t("Advanced")} percent={95} />
        <ProgressBar
          title={"Python"}
          subtitle={t("Advanced")}
          percent={90}
          margin={true}
        />
        <ProgressBar
          title={"NodeJS"}
          subtitle={t("Advanced")}
          percent={80}
          margin={true}
        />
        <ProgressBar
          title={t("Cpp")}
          subtitle={t("Intermediate")}
          percent={75}
          margin={true}
        />
      </CollapsibleBox>
      <CollapsibleBox
        title={t("FrontDev")}
        subtitle={t("MoreThan")}
        icon={<CodeIcon />}
      >
        <ProgressBar
          title={"React"}
          subtitle={t("Intermediate")}
          percent={70}
        />
        <ProgressBar
          title={"VueJs"}
          subtitle={t("Intermediate")}
          percent={70}
          margin={true}
        />
        <ProgressBar
          title={"JavaScript"}
          subtitle={t("Intermediate")}
          percent={70}
          margin={true}
        />
        <ProgressBar
          title={"HTML/CSS"}
          subtitle={t("Basic")}
          percent={60}
          margin={true}
        />
      </CollapsibleBox>
      <CollapsibleBox
        title={t("Designer")}
        subtitle={t("MoreThan")}
        icon={<FormatColorTextIcon />}
      >
        <ProgressBar
          title={"Figma"}
          subtitle={t("Intermediate")}
          percent={70}
        />
        <ProgressBar
          title={"Photoshop"}
          subtitle={t("Basic")}
          percent={50}
          margin={true}
        />
        <ProgressBar
          title={"Blender"}
          subtitle={t("Beginner")}
          percent={35}
          margin={true}
        />
      </CollapsibleBox>
      <CollapsibleBox
        title={t("DevOps")}
        subtitle={t("MoreThan")}
        icon={<SettingsIcon />}
      >
        <ProgressBar title={"Docker"} subtitle={t("Advanced")} percent={80} />
        <ProgressBar
          title={"Git"}
          subtitle={t("Advanced")}
          percent={80}
          margin={true}
        />
        <ProgressBar
          title={"PostgreSQL"}
          subtitle={t("Advanced")}
          percent={80}
          margin={true}
        />
        <ProgressBar
          title={"MySql"}
          subtitle={t("Advanced")}
          percent={75}
          margin={true}
        />
        <ProgressBar
          title={"Ansible"}
          subtitle={t("Basic")}
          percent={70}
          margin={true}
        />
      </CollapsibleBox>
    </Box>
  );
};

export default Skills;
