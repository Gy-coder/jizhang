import {Layout} from '../component/Layout';
import React from 'react';
import {HeadComponent} from '../component/Common/HeadComponent';
import {Summary} from '../component/Chart/Summary';
import {sumCalculate} from '../lib/sumCalculate';
import {useRecordList} from '../hooks/useRecordList';
import {ChooseType} from '../component/Common/ChooseType';
import styled from 'styled-components';


const ChooseTypeWrapper = styled.ol`
  display: flex;
  flex-direction: row;
  background:#f5f4f9;
  justify-content: center;
  padding: 2px 0;
  > li{
    width: 60px;
    height: 28px;
    display:flex;
    justify-content: center;
    align-items: center;
    margin:0 15px;
    position: relative;
    border-radius: 5px;
    font-size: 14px;
    background: #deecec;
    color:#0d966d;
    &.select{
      background: #0d966d;
      color:#deecec;
    }
  }
   
`;
const Chart: React.FC = () => {
  const {recordList} = useRecordList();
  const {
    incomeList: monthIncomeList,
    expenseList: monthExpenseList,
    incomeSum: monthIncomeSum,
    expenseSum: monthExpenseSum
  } = sumCalculate(recordList, 'month');
  return (
    <Layout>
      <HeadComponent title='账单详情'/>
      <Summary incomeSum={monthIncomeSum} expenseSum={monthExpenseSum} incomeNum={monthIncomeList.length}
               expenseNum={monthExpenseList.length}/>
      <ChooseTypeWrapper>
        <ChooseType type='-' onChange={() => {console.log(1);}}/>
      </ChooseTypeWrapper>
    </Layout>
  );
};


export {Chart};