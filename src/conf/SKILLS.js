import StorageIcon from "@mui/icons-material/Storage";
import CodeIcon from "@mui/icons-material/Code";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import SettingsIcon from "@mui/icons-material/Settings";

export const SKILLS = [
  {
    title: 'BackDev',
    subtitle: 'MoreThan',
    icon: <StorageIcon />,
    subskills: [
      { title: 'PHP', subtitle: 'Advanced', progress: 90 },
      { title: 'Python', subtitle: 'Advanced', progress: 85 },
      { title: 'NodeJS', subtitle: 'Advanced', progress: 85 },
      { title: 'Cpp', subtitle: 'Intermediate', progress: 65 },
    ],
  },
  {
    title: 'FrontDev',
    subtitle: 'MoreThan',
    icon: <CodeIcon />,
    subskills: [
      { title: 'React', subtitle: 'Advanced', progress: 80 },
      { title: 'VueJs', subtitle: 'Intermediate', progress: 70 },
      { title: 'JavaScript', subtitle: 'Intermediate', progress: 75 },
      { title: 'HTML/CSS', subtitle: 'Basic', progress: 65 },
    ],
  },
  {
    title: 'Designer',
    subtitle: 'MoreThan',
    icon: <FormatColorTextIcon />,
    subskills: [
      { title: 'Figma', subtitle: 'Intermediate', progress: 70 },
      { title: 'Photoshop', subtitle: 'Basic', progress: 50 },
      { title: 'Blender', subtitle: 'Beginner', progress: 35 },
    ],
  },
  {
    title: 'DevOps',
    subtitle: 'MoreThan',
    icon: <SettingsIcon />,
    subskills: [
      { title: 'Docker', subtitle: 'Advanced', progress: 80 },
      { title: 'PostgreSQL', subtitle: 'Advanced', progress: 80 },
      { title: 'Ansible', subtitle: 'Basic', progress: 65 },
      { title: 'Jenkins', subtitle: 'Intermediate', progress: 70 },
      { title: 'Kubernetes', subtitle: 'Intermediate', progress: 70 },
    ],
  },
];
