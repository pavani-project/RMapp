import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Toolbar } from "@mui/material";

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

const MainUi = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Toolbar />
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Adding Items" />
            <Tab label="Adding Suppliers" />
            <Tab label="Make Quotations" />
            <Tab label="Pending Quotations" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          items
        </TabPanel>
        <TabPanel value={value} index={1}>
          suppliers!
        </TabPanel>
        <TabPanel value={value} index={2}>
          make!
        </TabPanel>
        <TabPanel value={value} index={3}>
          pending!
        </TabPanel>
      </Box>
    </div>
  );
};
export default MainUi;
