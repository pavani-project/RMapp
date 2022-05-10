import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";

const Quotations = () => {
  const [data, setData] = useState([]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const [supplier_name, setSupplierName] = useState("");
  // const [items, setItems] = useState("");
  // const [comments, setComments] = useState("");
  // const [status, setStatus] = useState("");
  const [quotation_id, setQuotationID] = useState(null);

  // const FormData = {
  //   quotation_id: quotation_id,
  // supplier_name: supplier_name,
  // items: items,
  // comments: comments,
  // status: status,
  // };

  useEffect(() => {
    fetch("http://localhost:8081/make-quotation")
      .then((res) => res.json())
      .then(
        (result) => {
          if (result) {
            setData(result);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  const ApproveButton = () => {
    fetch("http://localhost:8081/update-approval", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(quotation_id),
    })
      .then((response) => response.json())
      .then((json) => {
        handleClose(true);
      });
  };

  const DisApproveButton = () => {
    fetch("http://localhost:8081/update-disapproval", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(FormData),
    })
      .then((response) => response.json())
      .then((json) => {
        handleClose(true);
      });
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple label" style={{ margin: "10px auto" }}>
        <TableHead>
          {/*table head**/}
          <TableRow style={{ backgroundColor: "skyblue" }}>
            <TableCell align="left" width={50} component="th" scope="row">
              Quotation ID
            </TableCell>
            <TableCell align="left" width={50}>
              Supplier Name
            </TableCell>
            <TableCell align="left" width={50}>
              Items
            </TableCell>
            <TableCell align="left" width={50}>
              Comments
            </TableCell>
            <TableCell align="left" width={50}>
              Applied Date
            </TableCell>
            <TableCell align="left" width={50}>
              Approval
            </TableCell>
            <TableCell align="left" width={50}>
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="left">{row.quotation_id}</TableCell>
              <TableCell align="left">{row.supplier_name}</TableCell>
              <TableCell align="left">{row.items}</TableCell>
              <TableCell align="left">{row.comments}</TableCell>
              <TableCell align="left">{row.applied_date}</TableCell>
              <TableCell>
                <IconButton
                  onClick={() => {
                    ApproveButton(row.quotation_id);
                  }}
                >
                  {" "}
                  <CheckIcon /> <br />
                </IconButton>
                <IconButton
                  onClick={() => {
                    DisApproveButton(row.quotation_id);
                  }}
                >
                  <ClearIcon />
                </IconButton>
              </TableCell>
              <TableCell align="left">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default Quotations;
