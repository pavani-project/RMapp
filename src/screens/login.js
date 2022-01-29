import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PasswordIcon from "@mui/icons-material/Password";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const useStyles = makeStyles(() => ({
    background: {
      backgroundImage: "linear-gradient(#7F7FD5,#86A8E7,#91EAE4)",
      backgroundSize: "contain",
      backgroundPosition: "right",
      backgroundRepeat: "no-repeat",
    },
    paperStyle: {
      padding: 25,
      margin: "80px auto",
      width: 350,
      height: "70vh",
    },
    btnStyle: {
      margin: "8px 0",
      color: "primary",
    },
  }));

  const [role_email, setRoleEmail] = useState("");
  const [role_password, setRolePassword] = useState("");
  const navigate = useNavigate();

  const authenticateUser = () => {
    const data = { role_email: role_email, role_password: role_password };

    fetch("http://localhost:8081/login", {
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
            console.log(data, "you are logged in!");
            navigate("thelayout/dashboard");
            // alert("hi");
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Grid container spacing={2}>
        <Paper elevation={3} className={classes.paperStyle}>
          <form>
            <h1>Log In</h1>
            <p>Hello, Welcome Back!</p>
            <div>
              {/* <PersonTwoToneIcon style={{padding:"0px"}} fontSize="small" /> */}
              <Box sx={{ "& > :not(style)": { m: 1 } }}>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <AccountCircle
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                  <TextField
                    id="input-with-sx"
                    variant="standard"
                    label="Email"
                    placeholder="Enter Email"
                    onChange={(e) => setRoleEmail(e.target.value)}
                    type="text"
                    required
                  />
                </Box>
              </Box>
              <Box sx={{ "& > :not(style)": { m: 1 } }}>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <PasswordIcon
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                  <TextField
                    id="input-with-sx"
                    variant="standard"
                    label="Password"
                    placeholder="Enter Password"
                    onChange={(e) => setRolePassword(e.target.value)}
                    type="password"
                    required
                  />
                </Box>
              </Box>
            </div>
            <FormControlLabel
              control={<Checkbox checked />}
              label="Remember me"
            />
            <br />
            <Button
              className={classes.btnStyle}
              variant="contained"
              onClick={() => {
                authenticateUser();
              }}
            >
              Log in
            </Button>
            <br />
            <br />
            <Typography>
              <Link to="/forgotpw">Forgot password?</Link>
            </Typography>
            <Typography>
              Don't you have an account?
              <Link to="/signup">
                <Button>Sign Up</Button>
              </Link>
            </Typography>
          </form>
        </Paper>
      </Grid>
    </div>
  );
};

export default Login;
