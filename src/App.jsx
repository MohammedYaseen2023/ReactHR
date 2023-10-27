
import * as React from 'react';
import { PieChart, pieArcClasses } from '@mui/x-charts/PieChart';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { BarChart } from '@mui/x-charts/BarChart';

const data = [
  { id: 0, value: 40, label: 'الحضور' },
  { id: 1, value: 15, label: 'الغياب' },
  { id: 2, value: 20, label: 'المتاخرين' },
];

export function Footer() {
  return (
    <div className='text-bg-primary text-center fs-5'>
      By Mohammed Yaseen  </div>
  )
}

export function PieActiveArc() {
  return (
    <PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30 },
        },
      ]}
      sx={{
        [`& .${pieArcClasses.faded}`]: {
          fill: 'gray',
        },
      }}
      height={300}
    />
  );
}

export function BasicBars() {
  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['الحضور', 'الغياب', 'المتاخرين'] }]}
      // series={[{ data: [40, 3, 5] }, { data: [15, 6, 3] }, { data: [20, 5, 6] }]}
      series={[{ data: [40, 0, 0] }, { data: [0, 15, 0] }, { data: [0, 0, 20] }]}
      width={500}
      height={300}
    />
  );
}
// --------------------tabs
function CustomTabPanel(props) {
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

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="دائري" {...a11yProps(0)} />
          <Tab label="عمودي" {...a11yProps(1)} />
          <Tab label="اخرى" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
     <div className='text-center py-3 fw-bold fs-1 text-bg-primary rounded-5'>سجل الحضور والغياب المخطط الدائري </div>
        <div className='py-3'>
          <PieActiveArc />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
     <div className='text-center py-3 fw-bold fs-1 text-bg-info rounded-5'>سجل الحضور والغياب المخطط العمودي </div>

        <div className='py-3'>
          <BasicBars />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        لا يوجد اي بيانات مدخلة
      </CustomTabPanel>
    </Box>
  );
}


//--------------------------------

function App() {


  return (
    <div >
      {/* <div className='text-center py-3 fw-bold fs-1 text-bg-primary'>سجل الحضور والغياب </div>
      <div className='py-3'>
      <PieActiveArc/>
      </div> */}
      <BasicTabs />
      <Footer />
    </div>
  )
}

export default App
