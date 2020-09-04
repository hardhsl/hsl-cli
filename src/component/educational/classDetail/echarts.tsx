import { Chart, Tooltip, Axis, Legend, Coord, Guide, Pie } from 'viser-react';
import * as React from 'react';
import Item from 'antd/lib/list/Item';
const DataSet = require('@antv/data-set');

const sourceData = [
  { item: '正常', count: 40 },
  { item: '迟到', count: 21 },
  { item: '早退', count: 17 },
  { item: '请假', count: 13 },
  { item: '缺席', count: 9 }
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
        <Chart forceFit height={222} data={data} scale={scale}>
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