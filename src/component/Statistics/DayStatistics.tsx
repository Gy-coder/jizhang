import React from "react"
import styled from 'styled-components';

const DayStatisticsWrapper = styled.div`
  margin: 20px 12px;
  > span {
    padding-right: 8px;
  }
`
const DayStatistics:React.FC = ()=>{
  return (
    <DayStatisticsWrapper>
      <span>今日收入 $0</span>
      <span>今日支出 $0</span>
    </DayStatisticsWrapper>
  )
}

export {DayStatistics}