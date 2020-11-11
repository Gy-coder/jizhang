import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';


const SummaryWrapper = styled.div`
  background: #ffffff;
  margin: 10px 8px;
  padding: 10px 4px;
  > div{
    padding: 4px 0;
    color: #333;
  }
  > .last{
    display:flex;
    justify-content: space-between;
  }
`;

type Props = {
  incomeNum:number,
  expenseNum:number,
  incomeSum:number,
  expenseSum:number
}
const Summary:React.FC<Props> = (props:Props) => {
  return (
    <SummaryWrapper>
      <div>{dayjs().format('YYYY年MM月')}账单</div>
      <div>共{props.expenseNum}笔支出   ${props.expenseSum}</div>
      <div className='last'>
        <div>共{props.incomeNum}笔收入  ${props.incomeSum}</div>
        <div>结余 ${props.incomeSum - props.expenseSum}</div>
      </div>
    </SummaryWrapper>
  );
};

export {Summary};