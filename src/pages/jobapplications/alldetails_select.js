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

const AllDetailsSelect = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [scheduled_date, setScheduledDate] = useState(props.scheduled_date);
  // eslint-disable-next-line
  const [application_id, setApplicationId] = useState(props.id);
  const [scheduled_time, setScheduledTime] = useState(props.scheduled_time);
  const [qualification, setQualification] = useState(props.qualification);

  const data = {
    application_id: application_id,
    scheduled_date: scheduled_date,
    scheduled_time: scheduled_time,
    qualification: qualification,
  };

  const SelectedButton = () => {
    fetch("http://localhost:8081/selected", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => {
        handleClose();
      });
  };

  const NotSelected = () => {
    fetch("http://localhost:8081/not-selected-table", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => {
        handleClose();
      });
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
                type="text"
                variant="filled"
                size="small"
                defaultValue={props.id}
              />
              <TextField
                id="filled-read-only-input"
                label="Title"
                type="text"
                variant="filled"
                size="small"
                defaultValue={props.title}
              />
              <TextField
                id="filled-read-only-input"
                label="First Name"
                type="text"
                variant="filled"
                size="small"
                defaultValue={props.firstname}
              />
              <TextField
                id="filled-read-only-input"
                label="Last Name"
                type="text"
                variant="filled"
                size="small"
                defaultValue={props.lastname}
              />
              <TextField
                id="filled-read-only-input"
                label="Email"
                type="text"
                variant="filled"
                size="small"
                defaultValue={props.email}
              />
              <TextField
                id="filled-read-only-input"
                label="Phone Number"
                type="text"
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
                defaultValue={props.cv}
              />

              <TextField
                id="filled-read-only-input"
                label="Skills"
                type="text"
                variant="filled"
                size="small"
                defaultValue={props.skills}
                fullWidth
              />
            </Box>
            <Divider />

            {/* Qualified or Not **/}
            <Box>
              <h4>Select or Not</h4>
              <br />
              <Stack direction="row" spacing={2}>
                <div>
                  <Button
                    variant="text"
                    endIcon={<CheckCircleIcon />}
                    style={{ color: "#07ab3b" }}
                    onClick={() => SelectedButton(props.application_id)}
                  >
                    Selected
                  </Button>
                  <Button
                    variant="text"
                    endIcon={<CancelIcon />}
                    style={{ color: "#cf0430" }}
                    onClick={() => NotSelected()}
                  >
                    Not Selected
                  </Button>
                </div>
              </Stack>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
export default AllDetailsSelect;
