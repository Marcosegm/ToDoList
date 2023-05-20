import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function TodosAlert () {
    return (
        <Stack sx={{ width: '80%' }} spacing={2}>
        <Alert severity="warning">No se ha encontrado nigún ToDo!</Alert>
      </Stack>
    )
}

export { TodosAlert}