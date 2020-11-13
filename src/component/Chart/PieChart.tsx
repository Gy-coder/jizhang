import React from 'react';
import ReactEcharts from 'echarts-for-react';
import {recordItemType} from '../../lib/recordItemType';
import styled from 'styled-components';


type Props = {
  typeList: recordItemType[],
  currentType: ('-' | '+')
}

const PieChartWrapper = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  margin-top: 2px;
  > div{
    width: 100%;
  }
`;
const PieChart: React.FC<Props> = (props: Props) => {
  const legendData: string[] = [];
  for (let i = 0; i < props.typeList.length; i++) {
    if (legendData.indexOf(props.typeList[i].tag.tagName) === -1) {
      legendData.push(props.typeList[i].tag.tagName);
    }
  }
  const amountData: any[] = [];
  const assistArray: any[] = [];
  for (let i = 0; i < props.typeList.length; i++) {
    if (assistArray.indexOf(props.typeList[i].tag.tagName) >= 0) {
      const index = assistArray.indexOf(props.typeList[i].tag.tagName);
      amountData[index].value += props.typeList[i].amount;
    } else {
      const obj = {name: props.typeList[i].tag.tagName, value: props.typeList[i].amount};
      amountData.push(obj);
      assistArray.push(props.typeList[i].tag.tagName);
    }
  }
  return (
    <PieChartWrapper>
      <ReactEcharts option={{
        tooltip: {
          trigger: 'item',
          formatter: '{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 10,
          data: legendData
        },
        series: [
          {
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: amountData
          }
        ]
      }}/>
    </PieChartWrapper>
  );
};

export {PieChart};