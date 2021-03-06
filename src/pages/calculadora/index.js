import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../components/layout";
import { Grid } from "@material-ui/core";
import TestTable from "../../components/TestTable";
import FormBox from "../../components/FormBox";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
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
  }
});

const Calculadora = () => {
  const cookies = new Cookies();
  const classes = useStyles();
  const [tests, setTests] = useState([]);
  const [activeTest, setActiveTest] = useState("");
  const [age, setAge] = useState(16);
  const [education, setEducation] = useState(0);
  const [sex, setSex] = useState(1);
  const [user, setUser] = useState();

  const fetchTests = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_SERVER_URL}/api/tests/get/names`
      );
      setTests(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {    
    fetchTests();
  }, []);

  const handleAge = () => {
    if(age<16){
      setAge(16)  
    }else if(age>130){
      setAge(130) 
    }
  }
  const handleEducation = () => {
    if(education<0){
      setEducation(0)  
    }else if(education>30){
      setEducation(30) 
    } 
  }

  return (
    <div>
      <Layout>
        <Grid container style={{ marginLeft: "30px" }}>
          <h2 className={classes.header}>Calculadora</h2>
          <Grid container direction="row" justifyContent="space-around" className={classes.demographicBox}>
            <Grid item>
              <TextField
                id="age"
                label="Edad"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                value={age}                
                onChange={(e)=>setAge(e.target.value)}
                onBlur={()=>handleAge()}                
              />
            </Grid>
            <Grid item>
              <TextField
                id="education"
                label="A??os de educaci??n"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                value={education}
                onChange={(e)=>setEducation(e.target.value)}
                onBlur={()=>handleEducation()}      
              />
            </Grid>
            <Grid item>
              <FormControl variant="outlined">
                <InputLabel id="sex">Sexo</InputLabel>
                <Select
                  labelId="sex"
                  id="sex"
                  value={sex}
                  onChange={(e)=>setSex(e.target.value)}
                >
                  <MenuItem value={0}>Masculino</MenuItem>
                  <MenuItem value={1}>Femenino</MenuItem>                  
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={5}>
              <TestTable tests={tests} changeActive={setActiveTest} />
            </Grid>
            <Grid item xs={5}>
              <FormBox activeTest={activeTest} education={education} age={age} sex={sex}/>
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    </div>
  );
};

export default Calculadora;
