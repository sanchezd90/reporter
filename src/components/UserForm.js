import { useState } from "react";
import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";

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

const UserForm = ({setEmail,setPass}) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    amount: "",
    password: "",
    email: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });  

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    if(prop==='email'){
      setEmail(event.target.value)
    }
    if(prop==='password'){
      setPass(event.target.value)
    }
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Grid container spacing={3} direction="column">
      <Grid item xs={4} style={{marginInline:'auto'}}>
        <FormControl required className={clsx(classes.margin, classes.textField)}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input 
            id="email"            
            value={values.email}
            onChange={handleChange("email")}
            style={{width:'220px'}}/>
        </FormControl>
      </Grid>
      <Grid item xs={4} style={{marginInline:'auto'}}>
        <FormControl required className={clsx(classes.margin, classes.textField)}>
          <InputLabel htmlFor="standard-adornment-password">
            Contraseña
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default UserForm;
