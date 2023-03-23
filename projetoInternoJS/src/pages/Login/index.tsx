import {
  Alert,
  Box,
  Button,
  Grid,
  Link,
  Paper,
  Snackbar,
  TextField,
  Typography
} from "@mui/material";
import { Container } from "@mui/system";
import { AxiosError } from "axios";
import { Image } from "mui-image";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../../assets/projetoInternoJS.svg";
import { login } from "../../services/Auth/login";

export function Login() {

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget); //isso vai ser para pegarmos as informações q o usuario digitar em email e senha

    try {
      const body = {
        email: String(data.get("email")),
        senha: String(data.get("password"))
      };
  
      await login(body);
      console.log("Logado com sucesso");
      navigate("/project");

    } catch(error) {
      console.log(error.response.data); //esse é o erro que o back manda pra gente (vai ser "Email e/ou senha incorretos!")
      setMessage(error.response.data);  //isso é para setar a mensagem no componente do MUI snackbar, q vai ser um modal de erro
      setOpen(true); //isso é para abrir o componente Snackbar do MUI mostrando o erro
    }
  }
  return (
    <Container
      component='main'
      maxWidth='xs'
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}>

      <Paper
        sx={{
          paddingX: 10,
          paddingY: 5
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >

          <Image
            src={Logo}
            style={{
              width: 140,
              height: 66,
              marginBottom: 16
            }}
          />

          <Typography component='h1' variant='h5' color='secondary' fontWeight='bold'>
            Login
          </Typography>

          <Box onSubmit={handleSubmit} component='form' noValidate sx={{mt: 1}}>

            <TextField
              label="Email"
              fullWidth
              id="email"
              required
              autoComplete="email"
              autoFocus
              margin="normal"
              variant="standard"
              name="email"
            />
            <TextField
              label="Senha"
              fullWidth
              id="password"
              required
              autoComplete="current-password"
              autoFocus
              margin="normal"
              variant="standard"
              name="password"
              type="password"
            
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Entrar
            </Button>
            <Grid container justifyContent='center'>
              <Link href="#" variant="body2">
                  Esqueceu sua senha?
              </Link>
            </Grid>

          </Box>
        </Box>
      </Paper>
      
      {/* //snackbar é um componente do MUI, q vamos utilizar para mensagens de erro no login */}
      <Snackbar
        open={open}
        message={message}
        autoHideDuration={1000}
        anchorOrigin = {{ vertical: "bottom", horizontal: "center"}}>

        <Alert
          elevation={6}
          variant="filled"
          severity="error">
          {message}
        </Alert>
      </Snackbar>

    </Container>
  );
}
