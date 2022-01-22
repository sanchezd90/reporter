import React, { useState } from "react";
import useFetchUser from "../../utils/useFetchUser";
import axios from "axios";
import Layout from "../../components/layout";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import SubjectForm from "../../components/SubjectForm";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import SearchIcon from "@material-ui/icons/Search";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const notify = () => toast("Sujeto agreado exitosamente");

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
    backgroundColor: "#0C4A60",
    color: "white",
    width: "70%",
    height: "54.5px",
    paddingLeft: "20px",
    paddingTop: "12px",
    marginTop: "10px",
    borderRadius: "10px",
  },
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

    height: "55px",
  },
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18,
    },
  },
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 500,
    marginLeft: "15px",
  },
  input: {
    marginLeft: "10px",
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
});

const Sujetos = () => {
  const classes = useStyles();
  const [user, setUser] = useState();
  const [subject, setSubject] = useState();
  const [showForm, setShowForm] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const notify = () => toast.success("Sujeto agreado exitosamente");

  useFetchUser({
    setUser,
  });

  const showNotify = () => {
    notify();
  };

  return (
    <div>
      <Layout>
        <div>
          <ToastContainer
            position="top-right"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
        <Grid container style={{ marginLeft: "30px" }}>
          <h2 className={classes.header}>Sujetos</h2>
        </Grid>
        <Paper
          component="form"
          className={classes.root}
          style={{ marginLeft: "30px" }}
        >
          <InputBase
            className={classes.input}
            placeholder="Buscar por DNI"
            inputProps={{ "aria-label": "Buscar por DNI" }}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
          <Divider className={classes.divider} orientation="vertical" />
          <Tooltip title="Agregar nuevo">
            <IconButton
              color="primary"
              className={classes.iconButton}
              aria-label="add"
              onClick={() => setShowForm(true)}
            >
              <AddCircleIcon />
            </IconButton>
          </Tooltip>
        </Paper>
        <Grid container style={{ marginLeft: "30px" }}>
          {showForm && (
            <SubjectForm setShowForm={setShowForm} showNotify={showNotify} />
          )}
        </Grid>
      </Layout>
    </div>
  );
};

export default Sujetos;
