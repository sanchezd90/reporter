import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import clsx from "clsx";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { Button } from "@material-ui/core";
import axios from "axios";
import ErrorMessage from "./ErrorMessage"

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
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    width: 200,
  },
});

const SubjectForm = ({ setShowForm, showNotify }) => {
  const classes = useStyles();  
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    subject_id: "",
    birth_date: "1950-01-01",
    sex: "femenino",
    handedness: "derecha",
  });
  const [showError,setShowError] = useState(false)
  const [error,setError] = useState()

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setShowError(false)
  };  

  const registerUser = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_SERVER_URL}/api/subjects/create`,
        values
      );
      console.log(response);
      if (response) {
        showNotify()
        setShowForm(false);
      }
    } catch (error) {      
      console.log(error.response.data);
      setError(error.response.data.message)
      setShowError(true)
    }
  };

  return (
    
    <Grid container spacing={3} direction="column">      
      <Grid item xs={4} style={{ marginLeft: "15px" }}>
        <FormControl
          required
          className={clsx(classes.margin, classes.textField)}
        >
          <InputLabel htmlFor="subject_id">DNI</InputLabel>
          <Input
            id="subject_id"
            value={values.subject_id}
            onChange={handleChange("subject_id")}
            style={{ width: "220px" }}
          />
        </FormControl>
        <FormControl
          required
          className={clsx(classes.margin, classes.textField)}
        >
          <InputLabel htmlFor="first_name">Nombre</InputLabel>
          <Input
            id="first_name"
            value={values.first_name}
            onChange={handleChange("first_name")}
            style={{ width: "220px" }}
          />
        </FormControl>
        <FormControl
          required
          className={clsx(classes.margin, classes.textField)}
        >
          <InputLabel htmlFor="last_name">Apellido</InputLabel>
          <Input
            id="last_name"
            value={values.last_name}
            onChange={handleChange("last_name")}
            style={{ width: "220px" }}
          />
        </FormControl>
        <FormControl
          required
          className={clsx(classes.margin, classes.textField)}
        >
          <InputLabel htmlFor="email">Correo electrónico</InputLabel>
          <Input
            id="email"
            value={values.email}
            onChange={handleChange("email")}
            style={{ width: "220px" }}
          />
        </FormControl>
        <FormControl
          required
          className={clsx(classes.margin, classes.textField)}
          style={{ marginTop: "10px" }}
        >
          <TextField
            id="birth_date"
            label="Fecha de nacimiento"
            type="date"
            defaultValue={values.birth_date}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange("birth_date")}
          />
        </FormControl>
        <FormControl
          component="fieldset"
          className={clsx(classes.margin, classes.textField)}
          style={{ marginTop: "10px" }}
        >
          <FormLabel component="legend">Sexo</FormLabel>
          <RadioGroup
            aria-label="sex"
            name="sex"
            value={values.sex}
            onChange={handleChange("sex")}
          >
            <FormControlLabel
              value="femenino"
              control={<Radio color='primary'/>}
              label="Femenino"
            />
            <FormControlLabel
              value="masculino"
              control={<Radio color='primary'/>}
              label="Masculino"
            />
          </RadioGroup>
        </FormControl>
        <FormControl
          component="fieldset"
          className={clsx(classes.margin, classes.textField)}
          style={{ marginTop: "10px" }}
        >
          <FormLabel component="legend">Preferencia manual</FormLabel>
          <RadioGroup
            aria-label="handedness"
            name="handedness"
            value={values.handedness}
            onChange={handleChange("handedness")}
          >
            <FormControlLabel
              value="derecha"
              control={<Radio color='primary'/>}
              label="Derecha"
              
            />
            <FormControlLabel
              value="izquierda"
              control={<Radio color='primary'/>}
              label="Izquierda"
              
            />
          </RadioGroup>
        </FormControl>        
      </Grid>
      {showError && (
      <div style={{marginLeft:'25px'}}>
        <ErrorMessage error={error}/>
      </div>
      )}
      <Grid container style={{marginTop:'20px'}}>
          <Grid item xs={4}>
            <Button
              variant="contained"
              className={classes.btnGrad}
              onClick={() => {
                setValues({
                  first_name: "",
                  last_name: "",
                  email: "",
                  subject_id: "",
                  birth_date: "1950-01-01",
                  sex: "femenino",
                  handedness: "derecha",
                });
                setShowForm(false);
              }}
            >
              Cancelar
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              className={classes.btnGrad}
              onClick={() => {
                registerUser();
              }}
              disabled={showError}
            >
              Agregar
            </Button>
          </Grid>
        </Grid>
    </Grid>
  );
};

export default SubjectForm;
