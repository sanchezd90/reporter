import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import { Button} from "@material-ui/core";

const useStyles = makeStyles({
    root:{ 
        paddingTop:'10px'     
    },
    inputField:{
        marginBottom:'10px',
    },
    btnGrad: {
        background: 'linear-gradient(to right, #E44D26 0%, #F16529  51%, #E44D26  100%)',
        '&:hover': {
          backgroundPosition: 'right center',
          color: '#ffce59',
          textDecoration: 'none',
        },
        margin: '10px',    
        textAlign: 'center',
        textTransform: 'uppercase',
        transition: '0.5s',
        backgroundSize: '200% auto',
        color: '#ffce59',
        boxShadow: '0 0 20px #eee',
        borderRadius: '10px',
        display: 'block',
        width: '80%',
        height: '55px'
       },
  })

const FormBox = ({activeTest}) => {
    const classes = useStyles();
    const [title, setTitle] = useState('')
    const [fields, setFields] = useState([])
    const [showResults,setShowResults] = useState(false)

    const fetchTests = async () => {
        console.log(activeTest)
        if(activeTest!==''){
            try {
              const { data } = await axios.get(
                `${process.env.NEXT_PUBLIC_API_SERVER_URL}/api/tests/get/single/${activeTest}`
              );              
              setTitle(data.fullName);
              setFields(data.fields)
              const norm_id = data.versions[0].norms[0]
              try {
                const { data:norms } = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/api/norms/get/single/${norm_id}`
                  );                  
              } catch (error) {
                console.log(error);
              }
            } catch (error) {
              console.log(error);
            }
        }
      };
    
      useEffect(() => {
        fetchTests();
      }, [activeTest]);

    const formatName = (fieldName) => {
        const segments = fieldName.replace('_',' ')
        return segments.charAt(0).toUpperCase() + segments.slice(1);
    }

    return (
        <div className={classes.root}>
            <h3>{title}</h3>
            {title!=='' && !showResults && (<form className={classes.root} noValidate autoComplete="off">
            {fields.map((field,index)=>{
                return(
                <div key={index} className={classes.inputField}>
                   <TextField id="outlined-basic" label={formatName(field)} variant="outlined" />
                </div>)
                })}
            <Button variant="contained" className={classes.btnGrad} onClick={() => setShowResults(true)}>Calcular puntajes</Button>     
            </form>)}
            {title!=='' && showResults && <Button variant="contained" className={classes.btnGrad} onClick={() => setShowResults(false)}>Ingresar puntajes</Button>}
        </div>
    )
}

export default FormBox