import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Stack from "@mui/material/Stack";
import CancelIcon from "@mui/icons-material/Cancel";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 20,
  p: 4,
};

const AllDetails = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [scheduled_date, setScheduledDate] = useState("");
  // eslint-disable-next-line
  const [application_id, setApplicationId] = useState(props.id);

  const data = {
    application_id: application_id,
    scheduled_date: scheduled_date,
  };

  const QualifiedButton = () => {
    fetch("http://localhost:8081/scheduled-date", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json, "Saved Data");
        handleClose();
        fetch("http://localhost:8081/scheduled-date")
          .then((res) => res.json())
          .then(
            (result) => {
              if (result) {
                console.log(result, "Data is there");
              }
            },
            (error) => {
              console.log(error);
            }
          );
      });
  };

  const NotQualified = () => {
    alert("hi");
  };

  return (
    <div>
      <button button4 onClick={handleOpen}>
        All Details
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="filled-read-only-input"
                label="ID"
                type="search"
                variant="filled"
                size="small"
                defaultValue={props.id}
              />
              <TextField
                id="filled-read-only-input"
                label="Title"
                type="search"
                variant="filled"
                size="small"
                defaultValue={props.title}
              />
              <TextField
                id="filled-read-only-input"
                label="First Name"
                type="search"
                variant="filled"
                size="small"
                defaultValue={props.firstname}
              />
              <TextField
                id="filled-read-only-input"
                label="Last Name"
                type="search"
                variant="filled"
                size="small"
                defaultValue={props.lastname}
              />
              <TextField
                id="filled-read-only-input"
                label="Email"
                type="search"
                variant="filled"
                size="small"
                defaultValue={props.email}
              />
              <TextField
                id="filled-read-only-input"
                label="Phone Number"
                type="search"
                variant="filled"
                size="small"
                defaultValue={props.phonenumber}
              />
              <TextField
                id="filled-read-only-input"
                label="CV"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                      >
                        <DownloadOutlinedIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                variant="filled"
              />

              <TextField
                id="filled-read-only-input"
                label="Skills"
                type="search"
                variant="filled"
                size="small"
                defaultValue={props.skills}
                fullWidth
              />
            </Box>
            <Divider />

            {/* Qualified or Not **/}
            <Box>
              <h4>Qualified or Not</h4>
              <br />
              <Stack direction="row" spacing={2}>
                <TextField
                  id="outlined-basic"
                  label="Schedule Date & Time"
                  variant="outlined"
                  size="small"
                  placeholder="DD/MM/YYYY 24h"
                  onChange={(e) => setScheduledDate(e.target.value)}
                />
                <Button
                  variant="text"
                  endIcon={<CheckCircleIcon />}
                  style={{ color: "#07ab3b" }}
                  onClick={() => QualifiedButton()}
                >
                  Qualified
                </Button>
                <Button
                  variant="text"
                  endIcon={<CancelIcon />}
                  style={{ color: "#cf0430" }}
                  onClick={() => NotQualified()}
                >
                  Not Qualified
                </Button>
              </Stack>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
export default AllDetails;
