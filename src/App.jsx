
import * as React from 'react';
import { PieChart, pieArcClasses } from '@mui/x-charts/PieChart';

const data = [
  { id: 0, value: 40, label: 'الحضور' },
  { id: 1, value: 15, label: 'الغياب' },
   { id: 2, value: 20, label: 'المتاخرين' },
];

export  function PieActiveArc() {
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
      height={200}
    />
  );
}


function App() {
 

  return (
    <div >
      <div className='text-center py-3 fw-bold fs-1 text-bg-primary'>سجل الحضور والغياب </div>
      <div className='py-3'>
      <PieActiveArc/>
      </div>
    </div>
  )
}

export default App
