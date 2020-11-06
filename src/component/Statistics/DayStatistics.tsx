import React from "react"
import styled from 'styled-components';

const DayStatisticsWrapper = styled.div`
  margin: 20px 12px;
  > span {
    padding-right: 8px;
  }
`

type Props = {
  incomeMoney:number,
  expenseMoney:number,
}
const DayStatistics:React.FC<Props> = (props:Props)=>{
  return (
    <DayStatisticsWrapper>
      <span>今日收入 {`$ ${props.incomeMoney}`}</span>
      <span>今日支出 {`$ ${props.expenseMoney}`}</span>
    </DayStatisticsWrapper>
  )
}

export {DayStatistics}