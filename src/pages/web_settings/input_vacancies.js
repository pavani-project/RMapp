import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
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

const InputVacancies = () => {
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
    fetch("http://localhost:8081/insert_vacancies")
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
    <div>
      <Button
        variant="contained"
        onClick={() => {
          handleOpen();
        }}
      >
        Insert a Vacancy
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Insert Vacancies
          </Typography>
          <input type="date" />
          <br />
          <TextField label="Job Position" variant="standard" fullWidth />
          <br />
          <TextField
            label="Minimum Qualifications"
            variant="standard"
            fullWidth
          />
          <br />
          <TextField label="Job Description" variant="standard" fullWidth />
          <br />

          <Button variant="contained" style={{ margin: "10px" }} size="small">
            Submit
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
                  Vacancy No
                </TableCell>
                <TableCell align="left" width={50}>
                  Job Position
                </TableCell>
                <TableCell align="left" width={50}>
                  Minimum Qualifications
                </TableCell>
                <TableCell align="left" width={50}>
                  Deadline
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="left">{row.vacancy_id}</TableCell>
                  <TableCell align="left">{row.job_postion}</TableCell>
                  <TableCell align="left">{row.minimum_qual}</TableCell>
                  <TableCell align="left">{row.minimum_qual}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
export default InputVacancies;
