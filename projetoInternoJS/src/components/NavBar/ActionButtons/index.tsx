import {
  Delete as DeleteIcon,
  Edit as EditIcon
} from '@mui/icons-material';
import { IconButton, Stack } from '@mui/material';

type Props = {
    id: number
}

export function ActionButtons ({ id } : Props) {
  return (
    <Stack //esse componente é para como se fosse empilhar cada elemento 
      flexDirection="row"
    >
      <IconButton >
        <EditIcon color="primary" onClick={() => alert(`EDIT: ${id}`)} />
      </IconButton>

      <IconButton>
        <DeleteIcon color="secondary" onClick={() => alert(`DELETE: ${id}`)}/>
      </IconButton>

    </Stack>
  )
}