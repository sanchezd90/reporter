import { Button, Card, CardContent, Grid } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  btnGrad: {
    background: 'linear-gradient(to right, #E44D26 0%, #F16529  51%, #E44D26  100%)',
    '&:hover': {
      backgroundPosition: 'right center',
      color: '#fff',
      textDecoration: 'none',
    },
    margin: '10px',
    padding: '15px 45px',
    textAlign: 'center',
    textTransform: 'uppercase',
    transition: '0.5s',
    backgroundSize: '200% auto',
    color: 'white',
    boxShadow: '0 0 20px #eee',
    borderRadius: '10px',
    display: 'block',
    width: '80%'
   }  
}));

const SideBar = () => {
  const classes = useStyles();
  return (
      <div>
    <Grid container>      
        <Button variant="contained" className={classes.btnGrad}>Pruebas</Button>
        <Button variant="contained" className={classes.btnGrad}>Informes</Button>     
        <Button variant="contained" className={classes.btnGrad}>Recursos</Button>     
    </Grid>
      </div>
  );
};

export default SideBar;
