import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField, Button, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import EmailIcon from "@mui/icons-material/Email";
import SampleLogo from "../images/sample.png";
import { Link } from "react-router-dom";

const ForgotPW = () => {
  const useStyles = makeStyles(() => ({
    root: {
      backgroundImage: "linear-gradient(#7F7FD5,#86A8E7,#91EAE4)",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    h1Style: {
      fontFamily: "Times New Roman",
      padding: "5px",
    },
    paperStyle: {
      padding: 20,
      margin: "80px auto",
      width: 800,
      height: "60vh",
      backgroundImage: `url(${SampleLogo})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right",
      backgroundSize: " 50% 100% ",
    },
  }));

  const classes = useStyles();
  return (
    <div>
      <Grid>
        <Paper className={classes.paperStyle}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "right",
            }}
          >
            <h1 className={classes.h1Style}>
              <br />
              Forgot your password?
            </h1>
            <div>
              <Box sx={{ "& > :not(style)": { m: 1 } }}>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                  <TextField
                    id="input-with-sx"
                    variant="standard"
                    label="Username"
                    placeholder="Enter Username"
                    type="text"
                    required
                  />
                </Box>
              </Box>
              <Button style={{ margin: "10px", color: "black" }}>
                Send a code
              </Button>
            </div>
            <div>
              <TextField
                id="outlined-basic"
                placeholder="Type the code"
                variant="outlined"
                style={{ margin: "10px" }}
              />
              <br />
              <Link to="/">
                <Button variant="contained" style={{ margin: "8px" }}>
                  login
                </Button>
              </Link>
            </div>
          </Box>
        </Paper>
      </Grid>
    </div>
  );
};

export default ForgotPW;
