import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Login } from "./pages/Login";

import { ptBR } from "@mui/material/locale"; //isso é pra deixar a formatação da data em pt

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: "#F9A006"
      },
      secondary: {
        main: "#E60B82"
      },
      mode: 'dark',
      // background: {
      //   default: "#F0F0F0"
      // },
      contrastThreshold: 2 //essa opção é para o contraste da paleta, o texto iria ficar preto de forma automatica com o laranja, mas setando esse valor como 2 o texto fica branco
    },
    typography: {
      fontFamily: [
        "Poppins",
        "Roboto"
      ].join(",")
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536
      }
    }
  }, ptBR); ////isso é pra deixar a formatação da data em pt

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Login />
    </ThemeProvider>
  );
}

export default App;