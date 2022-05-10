import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./styles.css";
// import { CustomerChart } from "./";

const Dashboard = () => {
  return (
    <div>
      <div className="divStyle">
        <Card sx={{ width: 200, height: 200 }} className="cardStyle">
          <CardContent>
            <Typography className="textStyle">Today's Appointments</Typography>
          </CardContent>
        </Card>

        <Card sx={{ width: 300, height: 200 }} className="cardStyle">
          <CardContent>
            <Typography className="textStyle">
              (NEW) Recieved Job Applications
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ width: 300, height: 200 }} className="cardStyle">
          <CardContent>
            <Typography className="textStyle">Store Updates</Typography>
          </CardContent>
        </Card>
      </div>
      <div className="h1Style">
        <h2>Summary Reports</h2>
      </div>
      <div className="divStyle">
        <Card sx={{ width: 300, height: 200 }} className="cardStyle">
          <CardContent>
            <Typography className="textStyle">
              Customer Appointments Reports
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ width: 300, height: 200 }} className="cardStyle">
          <CardContent>
            <Typography className="textStyle">
              Total Income and Expenses (Monthly / weekly)
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ width: 300, height: 200 }} className="cardStyle">
          <CardContent>
            <Typography className="textStyle">Employee Performance</Typography>
          </CardContent>
        </Card>
      </div>
      {/* <CustomerChart /> */}
    </div>
  );
};

export default Dashboard;
