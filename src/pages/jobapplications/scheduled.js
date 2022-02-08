import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { AllDetails } from ".";

const Scheduled = () => {
  // eslint-disable-next-line
  const [data, setData] = useState([]);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple label" style={{ margin: "10px auto" }}>
        <TableHead>
          {/*table head**/}
          <TableRow style={{ backgroundColor: "skyblue" }}>
            <TableCell align="left" component="th" scope="row" width={100}>
              Qualified No:
            </TableCell>
            <TableCell align="left" width={50}>
              First Name
            </TableCell>
            <TableCell align="left" width={100}>
              Scheduled Date
            </TableCell>
            <TableCell align="left" width={100}>
              Details
            </TableCell>
            <TableCell align="left" width={100}>
              Selected or Not
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="left">{row.application_id}</TableCell>
              <TableCell align="left">{row.firstname}</TableCell>
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
                />
              </TableCell>
              <TableCell align="left">{row.scheduled_date} </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Scheduled;
