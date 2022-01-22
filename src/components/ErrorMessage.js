import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const messages = {
    'Missing data':'Complete todos los campos',
    'This subject is already registered':'Ya existe un usuario con ese DNI',
    'User is already registered':'El usuario ya se encuentra registrado',
    'User is not registered':'El usuario no se encuentra registrado',
    'Invalid password':'Contraseña incorrecta',
    'Invalid data':'Datos inválidos',
    'User has been deleted':'El usuario ha sido eliminado'
}

const invalidDataMessages = {
    'Your password must contain at least 6 characters':'La contraseña debe contener al menos 6 caracteres',
    'Provide a valid email address':'Ingrese una dirección de correo válida'
}

const ErrorMessage = ({error}) =>{    
    return (
        <span style={{color:'red'}}>
            <ErrorOutlineIcon color={'error'}/>
            {error.message==='Invalid data' ? invalidDataMessages[error.error.errors[0].msg] : messages[error.message]}
        </span>
    )
}

export default ErrorMessage