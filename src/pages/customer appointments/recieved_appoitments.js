import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { AllDetails } from ".";

const RecievedAppoitments = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/appointment_details")
      .then((res) => res.json())
      .then(
        (result) => {
          if (result) {
            console.log(result, "Data is there");
            setData(result);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple label" style={{ margin: "10px auto" }}>
        <TableHead>
          {/*table head**/}
          <TableRow style={{ backgroundColor: "skyblue" }}>
            <TableCell align="left" component="th" scope="row" width={100}>
              Recieved No:
            </TableCell>
            <TableCell align="left" width={50}>
              Customer Name
            </TableCell>
            <TableCell align="left" width={100}>
              Vehicle Type
            </TableCell>
            <TableCell align="left" width={100}>
              Vehicle Number
            </TableCell>
            <TableCell align="left" width={100}>
              Date Appointed
            </TableCell>
            <TableCell align="left" width={100}>
              TIme Appointed
            </TableCell>
            <TableCell align="left" width={100}>
              Total Bill
            </TableCell>
            <TableCell align="left" width={100}>
              Other
            </TableCell>
            <TableCell align="left" width={100}>
              Services
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="left">{row.appointment_id}</TableCell>
              <TableCell align="left">{row.customer_name}</TableCell>
              <TableCell align="left">{row.vehicle_type}</TableCell>
              <TableCell align="left">{row.vehicle_no}</TableCell>
              <TableCell align="left">{row.date_appoint}</TableCell>
              <TableCell align="left">{row.time_appoint}</TableCell>
              <TableCell align="left">{row.total_bill}</TableCell>
              <TableCell align="left">{row.other}</TableCell>
              <TableCell align="left">{row.service_id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default RecievedAppoitments;
