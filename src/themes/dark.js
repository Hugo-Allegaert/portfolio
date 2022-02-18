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
      },
      grey: {
        900: "#fafafa",
        800: "#f5f5f5",
        700: "#eeeeee",
        600: "#e0e0e0",
        500: "#bdbdbd",
        400: "#9e9e9e",
        300: "#757575",
        200: "#616161",
        100: "#424242",
        50: "#212121",
      }
    },
});

export default theme