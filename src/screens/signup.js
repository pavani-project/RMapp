import React from "react";
import { Grid, makeStyles, Paper, Button, Typography } from "@material-ui/core";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: "linear-gradient(#7F7FD5,#86A8E7,#91EAE4)",
    backgroundSize: "contain",
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
  },
  paperStyle: {
    width: 360,
    height: "76vh",
    margin: "60px auto",
    padding: 10,
  },
  buttonStyle: {
    margin: "10px 0",
    // left:"100px",
  },
}));

const SignUp = () => {
  const classes = useStyles();
  const [role_fname, setRoleFname] = useState("");
  const [role_lname, setRoleLname] = useState("");
  const [role_email, setRoleEmail] = useState("");
  const [role_password, setRolePassword] = useState("");

  const data = {
    role_fname: role_fname,
    role_lname: role_lname,
    role_email: role_email,
    role_password: role_password,
  };

  const SignupData = () => {
    fetch("http://localhost:8081/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(
        (data) => {
          if (data) {
            console.log(data, "Signup!");

            alert("hi");
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Paper elevation={2} className={classes.paperStyle}>
          <form>
            <h1>Sign Up</h1>
            <p> Thank you for choosing us ...!</p>

            <Box sx={{ "& > :not(style)": { m: 1 } }}>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <PersonOutlineOutlinedIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  id="input-with-sx"
                  variant="standard"
                  label="First Name"
                  placeholder="Enter First Name"
                  onChange={(e) => setRoleFname(e.target.value)}
                  type="text"
                  required
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <PersonOutlineOutlinedIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  id="input-with-sx"
                  variant="standard"
                  label="Last Name"
                  placeholder="Enter Last Name"
                  onChange={(e) => setRoleLname(e.target.value)}
                  type="text"
                  required
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <EmailOutlinedIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  id="input-with-sx"
                  variant="standard"
                  label="Email Address"
                  placeholder="Enter Email Address"
                  onChange={(e) => setRoleEmail(e.target.value)}
                  type="text"
                  required
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <LockOutlinedIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  id="input-with-sx"
                  variant="standard"
                  label="Password"
                  placeholder="Enter Password"
                  onChange={(e) => setRolePassword(e.target.value)}
                  type="text"
                  required
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <LockOutlinedIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  id="input-with-sx"
                  variant="standard"
                  label="Confirm Password"
                  placeholder="Confirm the Password"
                  onChange={(e) => setRolePassword(e.target.value)}
                  type="text"
                  required
                />
              </Box>
            </Box>

            <Button
              className={classes.buttonStyle}
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => {
                SignupData();
              }}
            >
              Sign Up
            </Button>

            <Typography>
              Already you have an account?
              <Link to="/">
                <Button color="primary">Log In</Button>
              </Link>
            </Typography>
          </form>
        </Paper>
      </Grid>
    </div>
  );
};

export default SignUp;
