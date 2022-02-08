import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AddServices = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [data, setData] = useState([]);

  const [service_id, setServiceId] = useState("");
  const [service_name, setServiceName] = useState("");

  const formdata = {
    service_id: service_id,
    service_name: service_name,
  };

  useEffect(() => {
    fetch("http://localhost:8081/added-services")
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

  const AddingServices = () => {
    fetch("http://localhost:8081/adding-services", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json, "Saved Data");
        fetch("http://localhost:8081/adding-services")
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
      });
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          handleOpen();
        }}
      >
        Add Service
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Adding services to the database
          </Typography>
          <TextField
            id="standard-basic"
            label="Standard"
            variant="standard"
            fullWidth
            onChange={(e) => {
              setServiceName(e.target.value);
            }}
          />
          <br />
          <Button
            variant="contained"
            onClick={() => {
              AddingServices();
              handleClose();
            }}
            style={{ margin: "5px" }}
            size="small"
          >
            Add
          </Button>
          <Button
            variant="contained"
            onClick={handleClose}
            style={{ margin: "5px" }}
            size="small"
          >
            Cancel
          </Button>
        </Box>
      </Modal>

      <div style={{ margin: "20px" }}>
        <TableContainer component={Paper}>
          <Table aria-label="simple label" style={{ margin: "10px auto" }}>
            <TableHead>
              {/*table head**/}
              <TableRow style={{ backgroundColor: "skyblue" }}>
                <TableCell align="left" component="th" scope="row" width={50}>
                  Service No:
                </TableCell>
                <TableCell align="left" width={50}>
                  Service Name
                </TableCell>
                <TableCell align="left" width={50}>
                  Edit
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.name}>
                  <TableCell align="left">{row.service_id}</TableCell>
                  <TableCell align="left">{row.service_name}</TableCell>
                  <TableCell align="left">
                    <IconButton color="primary">
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default AddServices;
