import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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

const CustomerAppoitments = () => {
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
          <Tab label="Completed" />
          <Tab label="Scheduled" />
          <Tab label="Income" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Recieved Appoi
      </TabPanel>
      <TabPanel value={value} index={1}>
        Completed Appoi
      </TabPanel>
      <TabPanel value={value} index={2}>
        Scheduled Appoi
      </TabPanel>
      <TabPanel value={value} index={3}>
        Income Appoi
      </TabPanel>
    </Box>
  );
};
export default CustomerAppoitments;
