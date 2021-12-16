import NavBar from "../components/NavBar";
import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FolderSpecialIcon from "@material-ui/icons/FolderSpecial";
import CreateIcon from "@material-ui/icons/Create";
import FunctionsIcon from "@material-ui/icons/Functions";
import DescriptionIcon from "@material-ui/icons/Description";
import Link from "next/link";
import TextField from '@material-ui/core/TextField';
import UserForm from "../components/UserForm"

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
  return (
    <>
      <NavBar />
      <div style={{ marginTop: "50px" }}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={10}>
            <h1 className={classes.title}>
              Registrate en <span className={classes.highlight}>Reporter</span>
            </h1>
            <UserForm>
                
            </UserForm>
            <div style={{ marginTop: "50px" }}>
              <Grid container justifyContent="space-evenly">
                <Button variant="contained" className={classes.btnGrad}>
                  Registrarme
                </Button>
              </Grid>
              <Grid container justifyContent="space-evenly">
              <p>
                ¿Ya tenés un usuario?{" "}
                <span className={classes.highlight}>
                <Link href="/login">
                  Ingresá acá
                </Link>
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

export default SignUp;
