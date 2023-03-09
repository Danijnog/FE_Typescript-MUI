import { Box, Container, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Image from "mui-image";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/projetoInternoJS.svg";
import { navbarData, UserRole } from "./navbarData";

export function Drawer() {

  const navigate = useNavigate();
  const currentUser = (roles: UserRole) => {
    return roles;
  }

  return (
    <Container
      style={{
        height: '100%',
      }}
    >
      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: 24
        }} //a imagem vai ficar dentro desse Box
      > 
        <Image src={Logo} />    
      </Box>

      <List> 
        {
          navbarData.filter(({roles}) => roles.includes(currentUser("admin"))) //vamos filtrar para pegar o tipo de usuario, no caso o roles, e nesse caso filtramos pelo usuario admin
            .map(({title, Icon, path}, index) => ( //vou percorrer a navbar e pegar os titulos e o index de cada posicao do aarray
              <ListItem
                key={index}
                onClick={() => navigate(path)}
              >
                <ListItemButton>

                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>

                  <ListItemText>
                    {title}      
                  </ListItemText>

                </ListItemButton>
              </ListItem>
            ))
        }
      </List>
    </Container>
  );
}