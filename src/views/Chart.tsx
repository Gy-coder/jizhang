import {Layout} from '../component/Layout';
import React from 'react';
import {HeadComponent} from '../component/Common/HeadComponent';
import {Summary} from '../component/Chart/Summary';
import {sumCalculate} from '../lib/sumCalculate';
import {useRecordList} from '../hooks/useRecordList';



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
      <Summary incomeSum={monthIncomeSum} expenseSum={monthExpenseSum} incomeNum={monthIncomeList.length} expenseNum={monthExpenseList.length}/>
    </Layout>
  );
};


export {Chart};