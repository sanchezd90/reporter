import axios from "axios";
import Layout from '../components/layout'
import { Grid } from "@material-ui/core";
import TestTable from '../components/TestTable'

const Pruebas = () => {
  
  return (
    <div>      
      <Layout>
          <Grid container style={{marginLeft:'30px'}}>
            <h2>Pruebas</h2>
            <TestTable/>
          </Grid>
      </Layout>
    </div>
  );
};

export default Pruebas;
