import "./TodosError.css"
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function TodosError () {
    return( 
        <Stack sx={{ width: '80%' , maxWidth:'760px' }} spacing={2}>
            <Alert variant="filled" severity="error">
            Esta es una alerta de error, ¡échale un vistazo!
            </Alert>
        </Stack>
    )
}

export { TodosError}