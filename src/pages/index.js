import NavBar from '../components/NavBar'
import {
  Button,
  Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  title: {
    textAlign:'center'    
  },
  paragraph: {
    textAlign:'center'
  },
  highlight: {
    color:'#EF6C33',
    fontWeight:'bolder'
  },
  button:{
    backgroundColor:'#EF6C33'
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
            <h1 className={classes.title}>Bienvenido a <span className={classes.highlight}>E-val</span></h1>          
            <h3 className={classes.paragraph}><span className={classes.highlight}>E-val</span> cuenta con diferentes herramientas para facilitar los procesos de evaluación neurocognitiva. Podés anotar las respuestas obtenidas, calcular puntajes, almacenar resultados y generar informes</h3>
            <div style={{marginTop:'30px'}}>
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
