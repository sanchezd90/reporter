import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import { Button} from "@material-ui/core";


const useStyles = makeStyles({
  root:{
    borderBottomWidth:'0px',
  },
  btn: {
    backgroundColor:'#0C4A60',
    '&:hover': {
      backgroundColor:'#0c4a60de',
    },
    margin: '10px',
    padding: '15px 15px',    
    textTransform: 'uppercase',
    transition: '0.5s',
    backgroundSize: '200% auto',
    color: 'white',
    boxShadow: '0 0 20px #eee',
    borderRadius: '10px',
    display: 'block',
    width: '80%'
   } 
})


const TestTable = ({tests}) => {
  const classes = useStyles();
  return (    
    <TableContainer>
      <Table>        
        <TableBody>
          {tests.map((test,index)=>{
            return(
            <TableRow key={index}>
              <TableCell className={classes.root}>
                <Button className={classes.btn}>{test.fullName}</Button>
                </TableCell>
            </TableRow>
            )
          }
          )}          
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TestTable;
