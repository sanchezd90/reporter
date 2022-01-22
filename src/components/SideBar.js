import React, { useState, useEffect } from "react";
import { Button, Card, CardContent, Grid } from "@material-ui/core";
import Link from "next/link";
import Cookies from "universal-cookie";
import { useRouter } from "next/router"

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  btnGrad: {
    background:
      "linear-gradient(to right, #E44D26 0%, #F16529  51%, #E44D26  100%)",
    "&:hover": {
      backgroundPosition: "right center",
      color: "#ffce59",
      textDecoration: "none",
    },
    margin: "10px",
    textAlign: "center",
    textTransform: "uppercase",
    transition: "0.5s",
    backgroundSize: "200% auto",
    color: "#ffce59",
    boxShadow: "0 0 20px #eee",
    borderRadius: "10px",
    display: "block",
    width: "80%",
    height: "55px",
  },
  grid: {
    borderRightWidth: "1px",
    borderRightStyle: "ridge",
  },
}));

const SideBar = ({ user, setUser }) => {
  const classes = useStyles();
  const cookies = new Cookies();
  const router = useRouter()   
  
  const logout = () => {  
    setUser();  
    cookies.remove("user");
    router.push("/");
  };

  return (
    <div>
      <Grid
        container
        direction="column"
        className={classes.grid}
        style={{ height: "100vh" }}
      >
        <Link href="/calculadora">
          <Button variant="contained" className={classes.btnGrad}>
            Calculadora
          </Button>
        </Link>
        <Link href="/informes">
          <Button variant="contained" className={classes.btnGrad}>
            Informes
          </Button>
        </Link>
        <Link href="/recursos">
          <Button variant="contained" className={classes.btnGrad}>
            Recursos
          </Button>
        </Link>
        {user && (
          <>
            <Link href="/sujetos">
              <Button variant="contained" className={classes.btnGrad}>
                Sujetos
              </Button>
            </Link>
            <Link href="/perfil">
              <Button variant="contained" className={classes.btnGrad}>
                Perfil
              </Button>
            </Link>
            <Button
              variant="contained"
              className={classes.btnGrad}
              onClick={() => logout()}
            >
              Cerrar sesión
            </Button>
          </>
        )}
      </Grid>
    </div>
  );
};

export default SideBar;
