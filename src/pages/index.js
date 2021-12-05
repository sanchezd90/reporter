import NavBar from '../components/NavBar'
import {
  Button,
  Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import CreateIcon from '@material-ui/icons/Create';
import FunctionsIcon from '@material-ui/icons/Functions';
import DescriptionIcon from '@material-ui/icons/Description';

const useStyles = makeStyles({
  title: {
    textAlign:'center'    
  },
  paragraph: {    
    marginLeft:'10px',    
  },
  highlight: {
    color:'#EF6C33',
    fontWeight:'bolder'
  },
  button:{
    backgroundColor:'#EF6C33',
    color:'white',
    fontWeight:'bolder'

  }
});

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <NavBar/>
      <div style={{marginTop:'50px'}}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={6}>          
            <h1 className={classes.title}>Bienvenido a <span className={classes.highlight}>MoCApp</span></h1>          
            <h2 style={{aligtnText:'center'}}><span className={classes.highlight}>MoCApp</span> es una versión digital de la prueba de rastrillaje cognitivo MoCA.</h2>
            <h3 style={{marginTop:'50px'}}>Con <span className={classes.highlight}>MoCApp</span> podés: </h3>
            <div>
                <p className={classes.paragraph}><CreateIcon/><span style={{marginLeft:'15px', height:'100%'}}>Anotar las respuestas del evaluado y obtener corrección inmediata</span></p>
                <p className={classes.paragraph}><FunctionsIcon/><span style={{marginLeft:'15px', height:'100%'}}>Calcular puntajes brutos y estandarizados</span></p>
                <p className={classes.paragraph}><DescriptionIcon/><span style={{marginLeft:'15px', height:'100%'}}>Generar informes de resultados</span></p>
                <p className={classes.paragraph}><FolderSpecialIcon/><span style={{marginLeft:'15px', height:'100%'}}>Almacenar datos sobre tus evaluaciones</span></p>
            </div>
            
            <div style={{marginTop:'50px'}}>
            <Grid container justifyContent="space-evenly">
              <Button variant="contained" className={classes.button}>Comenzar</Button>
              <Button variant="contained" className={classes.button}>Registrarme</Button>
            </Grid>
            </div>
        </Grid>          
      </Grid>
      </div>
    </>
  );
};

export default Home;
