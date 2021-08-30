import React from "react";
import ReactEcharts from "echarts-for-react";
import { recordItemType } from "../../lib/recordItemType";
import dayjs from "dayjs";
import styled from "styled-components";

const LineChartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  margin: 10px 0 20px 0;
  > div {
    width: 100%;
  }
`;
type Props = {
  typeList: recordItemType[];
  currentType: "-" | "+";
};
const LineChart: React.FC<Props> = (props: Props) => {
  const xAxisData = [];
  for (let i = 1; i <= dayjs().daysInMonth(); i++) {
    xAxisData.push(i);
  }
  const amountList = [];
  for (let i = 0; i < dayjs().daysInMonth(); i++) {
    amountList.push(0);
  }
  for (let i = 0; i < props.typeList.length; i++) {
    const date = dayjs(props.typeList[i].createAt).date() - 1;
    amountList[date] += props.typeList[i].amount;
  }
  const colorArray = props.currentType === "-" ? ["#fb6a74"] : ["#62a2f7"];
  return (
    <LineChartWrapper>
      <ReactEcharts
        option={{
          xAxis: {
            type: "category",
            data: xAxisData,
            name: "日期",
          },
          yAxis: {},
          series: [
            {
              data: amountList,
              type: "line",
              name: "金额",
            },
          ],
          color: colorArray,
          grid: {
            x: 50,
            y: 50,
            x2: 50,
            y2: 50,
            borderWidth: 1,
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "none",
            },
          },
          formatter: "{b}日:<br/> 金额:{c}",
        }}
      />
    </LineChartWrapper>
  );
};
export { LineChart };
