import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../components/layout";
import { Grid } from "@material-ui/core";
import TestTable from "../../components/TestTable";
import { makeStyles } from "@material-ui/core/styles";

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
});

const Calculadora = () => {
  const classes = useStyles();
  const [tests, setTests] = useState([]);

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

  return (
    <div>
      <Layout>
        <Grid container style={{ marginLeft: "30px" }}>
          <h2 className={classes.header}>Calculadora</h2>
          <Grid container>
            <Grid item xs={5}>
              <TestTable tests={tests} />
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    </div>
  );
};

export default Calculadora;
