import NavBar from "../components/NavBar";
import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FolderSpecialIcon from "@material-ui/icons/FolderSpecial";
import CreateIcon from "@material-ui/icons/Create";
import FunctionsIcon from "@material-ui/icons/Functions";
import DescriptionIcon from "@material-ui/icons/Description";
import Link from "next/link";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { useState, useEffect } from "react";
import UserForm from "../components/UserForm";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";
import ErrorMessage from "../Components/ErrorMessage";

const useStyles = makeStyles({
  title: {
    textAlign: "center",
  },
  error: {
    textAlign: "center",
    color: "#EF6C33",
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

const Login = () => {
  const classes = useStyles();
  const router = useRouter();
  const cookies = new Cookies();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState();

  const login = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_SERVER_URL}/api/users/login`,
        {
          email: email,
          pass: pass,
        }
      );
      if (response) {
        console.log(response);
        if (response.data.token) {
          setError();
          cookies.set("user", response.data.token);
          router.push("/calculadora");
        }
      }
    } catch (error) {      
      setError(error.response.data);
      setShowError(true);
    }
  };

  useEffect(() => setShowError(false),[email,pass])

  return (
    <>
      <NavBar />
      <div style={{ marginTop: "50px" }}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={8}>
            <h1 className={classes.title}>
              Ingresá a <span className={classes.highlight}>Reporter</span>
            </h1>
            <UserForm setEmail={setEmail} setPass={setPass}></UserForm>
            {showError && (
              <Grid
                container
                justifyContent="space-evenly"
                style={{ marginTop: "50px" }}
              >
                <div>
                  <ErrorMessage error={error} />
                </div>
              </Grid>
            )}
            <div style={{ marginTop: "50px" }}>
              <Grid container justifyContent="space-evenly">
                <Button
                  variant="contained"
                  className={classes.btnGrad}
                  onClick={() => login()}
                >
                  Iniciar sesión
                </Button>
              </Grid>
              <Grid container justifyContent="space-evenly">
                <p>
                  ¿Aún no tenés un usuario?{" "}
                  <span className={classes.highlight}>
                    <Link href="/signup">Registrate</Link>
                  </span>
                </p>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Login;
