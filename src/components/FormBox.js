import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import { Button} from "@material-ui/core";

const useStyles = makeStyles({
    root:{ 
        paddingTop:'10px'     
    },
    inputField:{
        marginBottom:'10px',
    },
    btnGrad: {
        background: 'linear-gradient(to right, #E44D26 0%, #F16529  51%, #E44D26  100%)',
        '&:hover': {
          backgroundPosition: 'right center',
          color: '#ffce59',
          textDecoration: 'none',
        },
        margin: '10px',    
        textAlign: 'center',
        textTransform: 'uppercase',
        transition: '0.5s',
        backgroundSize: '200% auto',
        color: '#ffce59',
        boxShadow: '0 0 20px #eee',
        borderRadius: '10px',
        display: 'block',
        width: '80%',
        height: '55px'
       },
  })

const FormBox = ({activeTest, education, age, sex}) => {
    const classes = useStyles();
    const [title, setTitle] = useState('')
    const [fields, setFields] = useState([])
    const [showResults,setShowResults] = useState(false)
    const [data, setData] = useState()
    const [availableNorms,setAvailableNorms] = useState([])
    const [normSource,setNormSource] = useState()
    const [results, setResults] = useState()

    const setIndex = (norms,education,age,sex) => {
      let nseIndex = null;
      let ageIndex = null;
      let sexIndex = null;
      for (let i = 0; i < norms.nse.length; i++) {
        if (
          norms.nse[i][0] <= education &&
          education <= norms.nse[i][1]
        ) {
          nseIndex = i;
        }
      }    
      for (let i = 0; i < norms.age.length; i++) {        
        if (
          norms.age[i][0] <= age &&
          age <= norms.age[i][1]
        ) {
          ageIndex = i;
        }
      }    
      sexIndex = sex;
      let superposicion = false;
      if (norms.type === "superposicion") {
        superposicion = true;
      }
      return [nseIndex, ageIndex, sexIndex, superposicion];
    };

    const getTestNorms = (education, age, sex, availableNorms, source, score) => {
      const [selectedNorm] = availableNorms.filter((norm) => {
        return norm.norm_id === source;
      });
      let [nseIndex, ageIndex, sexIndex] = setIndex(selectedNorm,education,age,sex);             
      if (selectedNorm.sex.length===1) {
        sexIndex = 0;
      }    
      const norms = selectedNorm["norms"][score] || null;      
      let mean = null;
      let standarDeviation = null;
      if (norms) {        
        mean = norms[nseIndex][sexIndex][ageIndex][0]        
        standarDeviation = norms[nseIndex][sexIndex][ageIndex][1]        
      }          
      return [mean, standarDeviation];
    };

    const fetchTests = async () => {        
        if(activeTest!==''){
            try {
              const { data:test } = await axios.get(
                `${process.env.NEXT_PUBLIC_API_SERVER_URL}/api/tests/get/single/${activeTest}`
              );              
              setTitle(test.fullName);
              setFields(test.fields)
              const dataObject = {};
              test.fields.map(field=>{
                dataObject[field]=''
              })
              setData(dataObject)
              const normsData = []
              // const norm_ids = test.versions[0].norms
              // norm_ids.map(async (norm_id) => {                
              //   try {
              //     const { data:norms } = await axios.get(
              //         `${process.env.NEXT_PUBLIC_API_SERVER_URL}/api/norms/get/single/${norm_id}`
              //       );                    
              //     normsData.push(norms)
              //   } catch (error) {
              //     console.log(error);
              //   }                                 
              // })

              //SOLUCION TEMPORAL HASTA INCORPORAR SELECT DE NORMAS
              const norm_id = test.versions[0].norms[0]                        
                try {
                  const { data:fetched_norms } = await axios.get(
                      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/api/norms/get/single/${norm_id}`
                    );                    
                  normsData.push(fetched_norms)
                } catch (error) {
                  console.log(error);
                }                                               
                setAvailableNorms(normsData)                
                setNormSource(norm_id)
                setShowResults(false)                              
            } catch (error) {
              console.log(error);
            }
        }
      };
    
      useEffect(() => {
        fetchTests();         
      }, [activeTest]);

    const formatName = (fieldName) => {
        const segments = fieldName.replace('_',' ')
        return segments.charAt(0).toUpperCase() + segments.slice(1);
    }

    const scoreAll = () => {
      const scoresObject = {};
      Object.keys(data).map(score=>{
        const norms = getTestNorms(education,age,sex,availableNorms,normSource,score)        
        scoresObject[score]=Math.round((data[score]-norms[0])/norms[1]*10)/10
      })                 
      setResults(scoresObject)
    }

    const handleInputChange = (field, value) => {
      setData({...data,[field]:value})
    }

    const resetValues = () => {
      const newData = data
      Object.entries(newData).map(([k,v])=>{
        newData[k]=''
      })        
    }

    return (
        <div className={classes.root}>
            <h3>{title}</h3>
            {title!=='' && !showResults && (<form className={classes.root} noValidate autoComplete="off">
            {fields.map((field,index)=>{
                return(
                <div key={index} className={classes.inputField}>
                   <TextField id={field} type="number" label={formatName(field)} variant="outlined" onChange={(e)=>handleInputChange(field,e.target.value)}/>
                </div>)
                })}
            <Button variant="contained" className={classes.btnGrad} onClick={() => {
              setShowResults(true)
              scoreAll()              
              }}>Calcular puntajes</Button>     
            </form>)}
            {title!=='' && showResults && <Button variant="contained" className={classes.btnGrad} onClick={() => {              
              resetValues()
              setShowResults(false)              
              }}>Ingresar puntajes</Button>}
        </div>
    )
}

export default FormBox