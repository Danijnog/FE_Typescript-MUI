import { Button, Paper, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { ActionButtons } from '../../components/NavBar/ActionButtons';
import { User } from '../../Types/user';
import { HeaderTypography } from './styles';


type UserGridColDef =
    GridColDef & { //vamos extender tudo que tem no GridColDef do que o MUI declarou para essa interface nossa
    field: keyof User //vamos fazer que field seja um tipo de User
}

export function UserList() {

  const columns: UserGridColDef[] = [
    {
      field: 'nome',
      headerName: 'Nome',
      flex: 1, //isso vai ser a distancia entre os campos da tabela
      editable: true,
      renderHeader: ({ colDef: {headerName}  }) => //isso é para renderizar o header da tabela com o componente headerTypography que criei no styles.ts
        <HeaderTypography color="primary"> 
          {headerName}
        </HeaderTypography>
    },

    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
      editable: true,
      renderHeader: ({ colDef: {headerName} }) => 
        <HeaderTypography color="primary">
          {headerName}
        </HeaderTypography>
    },

    {
      field: 'id',
      headerName: 'Ações',
      flex: 1,
      renderCell: ({value} ) => //função pra renderizar os icones nas celulas da tabela
        <ActionButtons id={Number(value)} />,

      renderHeader: ({ colDef: {headerName} }) => //isso é pra renderizar o header da tabela com o componente headerTypography que criei no styles.ts
        <HeaderTypography color="primary">
          {headerName}
        </HeaderTypography>
    },
  ];

  const rows: User[] = [
    {
      id: 50,
      nome: "Daniel",
      email: "danielnjunq@gmail.com"
    },

    {
      id: 50,
      nome: "Daniel",
      email: "danielnjunq@gmail.com"
    },

    {
      id: 50,
      nome: "Daniel",
      email: "danielnjunq@gmail.com"
    },

    {
      id: 50,
      nome: "Daniel",
      email: "danielnjunq@gmail.com"
    },
  ];

  const navigate = useNavigate();

  return (
    <Box sx={{ height: 400, width: '100%' }}>

      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        paddingBottom={1}
      >
        <Typography fontSize={24} fontWeight="medium" color="secondary">
          Usuários
        </Typography>
        <Button variant='outlined' onClick={() => navigate("./createUser")}
          sx={{
            width: '15%'
          }}
        >
          Adicionar usuário
        </Button>
        
      </Stack>
        
      <Paper
        sx={{
          height: '100%'
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Paper>
 
    </Box>
  );
}


