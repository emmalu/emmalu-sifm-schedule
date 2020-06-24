import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
//import moment from 'moment';
import DataController from './components/ScheduleData';


function App() {
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
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  function tabProperties(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Vendor Schedule
        </h2>
        <AppBar position="static" className="Tab-Bar">
          <Tabs value={value} onChange={handleChange} aria-label="Schedule Navigation" centered >
            <Tab label="This Week " {...tabProperties(0)} />
            <Tab label="Next Week" {...tabProperties(1)} />
            <Tab label="The Week After" {...tabProperties(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <DataController week={1}/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <DataController week={2}/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <DataController week={3}/>
        </TabPanel>
      </header>
    </div>
  );
}

export default App;
