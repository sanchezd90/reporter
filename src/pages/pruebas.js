import {useState , useEffect} from 'react';
import axios from "axios";
import Layout from '../components/layout'
import { Grid } from "@material-ui/core";
import TestTable from '../components/TestTable'

const Pruebas = () => {
  const [tests, setTests] = useState([])  

  const fetchTests = async() => {
    try {      
      const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/api/tests/get/names`)
      setTests(data)
      }catch (error) {
        console.log(error)
      }
  }

  useEffect(()=> {
    fetchTests()
  } ,[])

  return (
    <div>      
      <Layout>
          <Grid container style={{marginLeft:'30px'}}>
            <h2>Pruebas</h2>
            <TestTable tests={tests}/>
          </Grid>
      </Layout>
    </div>
  );
};

export default Pruebas;
