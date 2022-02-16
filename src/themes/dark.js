import { createTheme } from '@material-ui/core/styles'
import { light } from '@material-ui/core/styles/createPalette';

// Dark theme
const theme = createTheme({
    palette: {
      primary: {
        main: "#ebf0f7",
      },
      secondary: {
        main: "#aca6ee",
        light: "rgba(172, 166, 238, 0.7)"
      },
      background: {
        paper: "#060d22",
        light: "#141E2C"
      }
    },
});

export default theme