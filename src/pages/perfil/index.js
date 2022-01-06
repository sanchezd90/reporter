import { useState, useEffect } from "react";
import useFetchUser from "../../utils/useFetchUser"
import axios from "axios";
import Layout from "../../components/layout";
import { makeStyles } from "@material-ui/core/styles";
import Cookies from "universal-cookie";
import jwt from "jsonwebtoken";
import { Button, Card, CardContent, Grid, TextField } from "@material-ui/core";
import NavBar from "../../components/NavBar";

const useStyles = makeStyles({
  header: {
    backgroundColor: "#f8bd32",
    color: "#93331d",
    width: "100%",
    height: "54.5px",
    paddingLeft: "20px",
    paddingTop: "12px",
    marginTop: "10px",
    borderRadius: "10px",
  },
  header2: {
    backgroundColor:  "#0C4A60",
    color: "white",
    width: "100%",
    height: "54.5px",
    paddingLeft: "20px",
    paddingTop: "12px",
    marginTop: "10px",
    borderRadius: "10px",
  },
});

const Perfil = () => {
  const classes = useStyles();
  const [user, setUser] = useState();  

  useFetchUser({    
    setUser
  })

  return (
    <div>
      <Layout>
        <Grid container style={{ marginLeft: "30px" }}>
          <h2 className={classes.header}>Perfil</h2>
          {user && (            
            <h2 className={classes.header2}>{user.email} ({user.valid_email? 'verificado':'sin verificar'})</h2>
          )}                     
        </Grid>
      </Layout>
    </div>
  );
};

export default Perfil;
