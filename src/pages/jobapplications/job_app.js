import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Recieved } from "./index";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const JobApp = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Recieved" />
          <Tab label="Qualified" />
          <Tab label="Scheduled" />
          <Tab label="Selected" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Recieved />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Qualified table
      </TabPanel>
      <TabPanel value={value} index={2}>
        Scheduled table
      </TabPanel>
      <TabPanel value={value} index={3}>
        Selected table
      </TabPanel>
    </Box>
  );
};
export default JobApp;
