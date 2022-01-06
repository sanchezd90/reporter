import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FolderSpecialIcon from "@material-ui/icons/FolderSpecial";
import CreateIcon from "@material-ui/icons/Create";
import FunctionsIcon from "@material-ui/icons/Functions";
import DescriptionIcon from "@material-ui/icons/Description";
import Link from "next/link";
import Cookies from "universal-cookie";
import jwt from "jsonwebtoken";

const useStyles = makeStyles({
  title: {
    textAlign: "center",
  },
  paragraph: {
    marginLeft: "10px",
  },
  highlight: {
    color: "#EF6C33",
    fontWeight: "bolder",
    fontSize: "110%",
  },

  btnGrad: {
    background:
      "linear-gradient(to right, #E44D26 0%, #F16529  51%, #E44D26  100%)",
    "&:hover": {
      backgroundPosition: "right center",
      color: "#fff",
      textDecoration: "none",
    },
    margin: "10px",
    padding: "15px 45px",
    textAlign: "center",
    textTransform: "uppercase",
    transition: "0.5s",
    backgroundSize: "200% auto",
    color: "white",
    boxShadow: "0 0 20px #eee",
    borderRadius: "10px",
    display: "block",
  },
});

const Home = () => {
  const classes = useStyles();
  const cookies = new Cookies();
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(jwt.decode(cookies.get('user')));    
  }, []);

  return (
    <>
      <NavBar user={user?.user} setUser={setUser}/>
      <div style={{ marginTop: "50px" }}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={6}>
            <h1 className={classes.title}>
              Bienvenido a <span className={classes.highlight}>Reporter</span>
            </h1>
            <h2 style={{ aligtnText: "center" }}>
              <span className={classes.highlight}>Reporter</span> es una herramienta
              digital que te ayuda con los procesos de evaluación neurocognitiva.
            </h2>
            <h3 style={{ marginTop: "50px" }}>
              Con <span className={classes.highlight}>Reporter</span> podés:{" "}
            </h3>
            <div>              
              <p className={classes.paragraph}>
                <FunctionsIcon />
                <span style={{ marginLeft: "15px", height: "100%" }}>
                  Calcular puntajes brutos y estandarizados
                </span>
              </p>
              <p className={classes.paragraph}>
                <DescriptionIcon />
                <span style={{ marginLeft: "15px", height: "100%" }}>
                  Generar informes de resultados
                </span>
              </p>
              <p className={classes.paragraph}>
                <FolderSpecialIcon />
                <span style={{ marginLeft: "15px", height: "100%" }}>
                  Ordenar y almacenar información sobre tus evaluaciones
                </span>
              </p>
            </div>

            <div style={{ marginTop: "50px" }}>
              <Grid container justifyContent="space-evenly">
                <Link href="/calculadora">
                  <Button variant="contained" className={classes.btnGrad}>
                    Comenzar
                  </Button>
                </Link>
                {!user && <Link href="/signup">
                  <Button variant="contained" className={classes.btnGrad}>
                    Registrarme
                  </Button>
                </Link>}
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Home;
