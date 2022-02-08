import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";

const Items = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/item-list")
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
    <div style={{ margin: "20px" }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple label" style={{ margin: "10px auto" }}>
          <TableHead>
            {/*table head**/}
            <TableRow style={{ backgroundColor: "skyblue" }}>
              <TableCell align="left" component="th" scope="row" width={50}>
                Item No:
              </TableCell>
              <TableCell align="left" width={50}>
                Item Name
              </TableCell>
              <TableCell align="left" width={50}>
                Item Qty
              </TableCell>
              <TableCell align="left" width={50}>
                Used item Qty
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.name}>
                <TableCell align="left">{row.item_id}</TableCell>
                <TableCell align="left">{row.item_name}</TableCell>
                <TableCell align="left">{row.item_qty}</TableCell>
                <TableCell align="left">{row.used_item_qty}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Items;
