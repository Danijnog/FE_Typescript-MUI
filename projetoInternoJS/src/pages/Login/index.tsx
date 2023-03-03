import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  Typography 
} from "@mui/material";
import { Container } from "@mui/system";
import { Image } from "mui-image";

import Logo from "../../assets/projetoInternoJS.svg"

export function Login() {
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

          <Box component='form' noValidate sx={{mt: 1}}>

            <TextField
              label="Email"
              fullWidth
              id="email"
              required
              autoComplete="email"
              autoFocus
              margin="normal"
            />
            <TextField
              label="Senha"
              fullWidth
              id="password"
              required
              autoComplete="current-password"
              autoFocus
              margin="normal"
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

    </Container>
  );
}
