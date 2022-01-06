import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../components/layout";
import { Card, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Cookies from "universal-cookie";
import jwt from "jsonwebtoken";

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
  demographicBox: {
        
    borderBottom: '1px solid #f8bd32',
    paddingTop: '10px',
    paddingBottom: '20px',
  },
  message: {
    marginInline: "auto",
    color: "#0C4A60"
  }
});

const Informes = () => {
  const cookies = new Cookies();
  const classes = useStyles();
  const [tests, setTests] = useState([]);
  const [activeTest, setActiveTest] = useState("");
  const [age, setAge] = useState(16);
  const [education, setEducation] = useState(0);
  const [sex, setSex] = useState(1);
  const [user, setUser] = useState();

  return (
    <div>
      <Layout>
        <Grid container style={{ marginLeft: "30px" }}>
          <h2 className={classes.header}>Informes</h2>
        </Grid>
        <Grid container>
            <h2 className={classes.message}>Esta función estará disponible próximamente</h2>          
        </Grid>
      </Layout>
    </div>
  );
};

export default Informes;
