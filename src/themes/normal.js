import { createTheme } from '@material-ui/core/styles'

// Normal or default theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#2b2b2b",
    },
    secondary: {
      main: "#ff8869",
      light: "rgba(254, 217, 200, 0.7)"
    },
    background: {
      paper: "#fbfbfb",
      light: "#FFF6F2"
    }
  },
});

export default theme