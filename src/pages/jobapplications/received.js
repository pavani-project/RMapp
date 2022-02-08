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

const Recieved = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/recieved-applications")
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
              Title
            </TableCell>
            <TableCell align="left" width={100}>
              First Name
            </TableCell>
            <TableCell align="left" width={100}>
              Last Name
            </TableCell>
            <TableCell align="left" width={100}>
              Details
            </TableCell>
            <TableCell align="left" width={100}>
              Scheduled Date
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="left">{row.application_id}</TableCell>
              <TableCell align="left">{row.title}</TableCell>
              <TableCell align="left">{row.firstname}</TableCell>
              <TableCell align="left">{row.lastname}</TableCell>
              <TableCell align="left">
                <AllDetails
                  title={row.title}
                  firstname={row.firstname}
                  lastname={row.lastname}
                  skills={row.skills}
                  email={row.email}
                  phonenumber={row.phone_number}
                  id={row.application_id}
                  scheduled_date={row.scheduled_date}
                  setdata={setData}
                />
              </TableCell>
              {/* <TableCell align="left">qualified </TableCell>/ */}
              <TableCell align="left">{row.scheduled_date} </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default Recieved;
