import { Chart, Tooltip, Axis, Legend, Coord, Guide, Pie } from 'viser-react';
import * as React from 'react';
const DataSet = require('@antv/data-set');

const sourceData = [
  { item: '正常考勤', count: 10 },
  { item: '异常考勤', count: 21 },
  { item: '请假', count: 17 }
];

const scale = [{
  dataKey: 'percent',
  min: 0,
  formatter: '.0%',
}];

const dv = new DataSet.View().source(sourceData);
dv.transform({
  type: 'percent',
  field: 'count',
  dimension: 'item',
  as: 'percent'
});
const data = dv.rows;

const CheckWorkEcharts = ()=>{
    return (
        <Chart forceFit height={420} data={data} scale={scale}>
        <Tooltip showTitle={false} />
        <Axis />
        <Legend dataKey="item" />
        <Coord type="theta" radius={0.75} innerRadius={0.6} />
        <Pie position="percent" color={['item',['#1EB6AE','#9870F7','#F4626C','#FFC000','#FFC000']]} style={{ stroke: '#fff', lineWidth: 1 }}
          label={['percent', {
            formatter: (val: string, item: { point: { item: string; }; }) => {
              return item.point.item + ': ' + val;
            }
          }]}
        />
      </Chart>
    )
}
export {
    CheckWorkEcharts
}