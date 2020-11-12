import React from 'react';
import ReactEcharts from 'echarts-for-react';
import {recordItemType} from '../../lib/recordItemType';
import dayjs from 'dayjs';
import styled from 'styled-components';


const BarChartWrapper = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  > div{
    width: 100%;
  }
`;
type Props = {
  typeList: recordItemType[],
  currentType: ('-' | '+')
}
const BarChart: React.FC<Props> = (props: Props) => {
  const xAxisData = [];
  for (let i = 1; i <= dayjs().daysInMonth(); i++) {
    xAxisData.push(i);
  }
  console.log(xAxisData);
  const amountList = [];
  for (let i = 0; i < dayjs().daysInMonth(); i++) {
    amountList.push(0);
  }
  for (let i = 0; i < props.typeList.length; i++) {
    const date = dayjs(props.typeList[i].createAt).date() - 1;
    amountList[date] += props.typeList[i].amount;
  }
  const colorArray = props.currentType === '-' ? ['#fb6a74'] : ['#62a2f7'];
  return (
    <BarChartWrapper>
      <ReactEcharts
        option={{
          xAxis: {
            type: 'category',
            data: xAxisData,
          },
          yAxis: {},
          series: [{
            data: amountList,
            type: 'line',
            name:'金额'
          }],
          color: colorArray,
          grid: {
            x: 50,
            y: 50,
            x2: 50,
            y2: 50,
            borderWidth: 1
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'none'
            },
          },
        }}
      /></BarChartWrapper>
  );
};
export {BarChart};