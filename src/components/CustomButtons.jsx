import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const OutlinedButton = styled(Button)(({ theme }) => ({
  color: theme.palette.secondary.main,
  borderColor: theme.palette.secondary.main,
  backgroundColor: theme.palette.background.paper,
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.primary.main,
    borderColor: theme.palette.secondary.main,
  },
}));

const ContainedButton = styled(Button)(({ theme }) => ({
  color: theme.palette.background.paper,
  borderColor: theme.palette.secondary.main,
  backgroundColor: theme.palette.secondary.main,
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.primary.main,
    borderColor: theme.palette.secondary.main,
  },
}));

export { ContainedButton, OutlinedButton };
