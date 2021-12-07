import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const TestTable = ({tests}) => {
  return (    
    <TableContainer>
      <Table>        
        <TableBody>
          {tests.map((test,index)=>{
            return(
            <TableRow key={index}>
              <TableCell>{test.fullName}</TableCell>
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
