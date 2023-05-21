import "./EmptyTodos.css"
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function EmptyTodos () {
    return (
        <Stack sx={{ width: '80%', maxWidth:'760px' }} spacing={2}>
            
            <Alert severity="info">Aún no tienes ningún To Do, crea uno para comenzar...</Alert>
      </Stack>
    )
}

export {EmptyTodos}