import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const messages = {
    'Missing data':'Complete todos los campos',
    'This subject is already registered':'Ya existe un usuario con ese DNI'
}

const ErrorMessage = ({error}) =>{
    return (
        <span style={{color:'red'}}>
            <ErrorOutlineIcon color={'error'}/>
            {messages[error]}
        </span>
    )
}

export default ErrorMessage