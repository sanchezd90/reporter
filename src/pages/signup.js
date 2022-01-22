import NavBar from "../components/NavBar";
import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FolderSpecialIcon from "@material-ui/icons/FolderSpecial";
import CreateIcon from "@material-ui/icons/Create";
import FunctionsIcon from "@material-ui/icons/Functions";
import DescriptionIcon from "@material-ui/icons/Description";
import Link from "next/link";
import TextField from "@material-ui/core/TextField";
import UserForm from "../components/UserForm";
import axios from "axios";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import ErrorMessage from "../Components/ErrorMessage";

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

const SignUp = () => {
  const classes = useStyles();
  const cookies = new Cookies();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState();
  const [verifyMail, setVerifyMail] = useState(false);

  const createUser = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_SERVER_URL}/api/users/create`,
        {
          email: email,
          pass: pass,
        }
      );
      if (response) {
        console.log(response);
        cookies.set("user", response.data.token);
        setVerifyMail(true);
        setError();
      }
    } catch (error) {
      console.log(error.response.data);
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
          <Grid item xs={10}>
            <h1 className={classes.title}>
              Registrate en <span className={classes.highlight}>Reporter</span>
            </h1>
            {verifyMail ? (
              <div>
                <p className={classes.title}>
                  Hemos enviado un{" "}
                  <span className={classes.highlight}>
                    enlace de verificación
                  </span>{" "}
                  a <strong>{email}</strong>.
                </p>
                <p className={classes.title}>
                  Usa ese enlace para finalizar con el proceso de registro.
                </p>
              </div>
            ) : (
              <>
                <UserForm setEmail={setEmail} setPass={setPass}></UserForm>
                {showError && (
                  <Grid container justifyContent="space-evenly" style={{ marginTop: "50px" }}>                    
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
                      onClick={() => createUser()}
                    >
                      Registrarme
                    </Button>
                  </Grid>
                  <Grid container justifyContent="space-evenly">
                    <p>
                      ¿Ya tenés un usuario?{" "}
                      <span className={classes.highlight}>
                        <Link href="/login">Ingresá acá</Link>
                      </span>
                    </p>
                  </Grid>
                </div>
              </>
            )}
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default SignUp;
