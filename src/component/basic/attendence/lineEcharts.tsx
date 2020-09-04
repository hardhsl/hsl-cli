import { Chart, Tooltip, Axis, Legend, SmoothLine, Point } from 'viser-react';
import * as React from 'react';
const DataSet = require('@antv/data-set');

const sourceData = [
  { month: '迟到', Tokyo: 7 },
  { month: '正常', Tokyo: 6,},
  { month: '早退', Tokyo: 9,},
  { month: '缺席', Tokyo: 14,},
  { month: '请假', Tokyo: 18,},
];

const dv = new DataSet.View().source(sourceData);
dv.transform({
  type: 'fold',
  fields: ['Tokyo'],
  key: 'city',
  value: 'temperature',
});
const data = dv.rows;

const scale = [{
  dataKey: 'month',
  min: 0,
  max: 1,
}];
const LineEcharts = () => {
    return (
        <Chart forceFit height={420} data={data} scale={scale}>
          <Tooltip />
          <Axis />
          <Legend />
          <SmoothLine position="month*temperature" color="city" />
          <Point position="month*temperature" color="city" shape="circle"/>
        </Chart>
      );
}
export {
    LineEcharts
}





