import {Layout} from '../component/Layout';
import React from 'react';
import {Head} from '../component/Statistics/Head';
import {MonthStatistics} from '../component/Statistics/MonthStatistics';
import {DayStatistics} from '../component/Statistics/DayStatistics';
import {RecordDetail} from '../component/Statistics/RecordDetail';
import {useRecordList} from '../hooks/useRecordList';
import {sumCalculate} from '../lib/sumCalculate';


const Statistics: React.FC = () => {
  const {recordList} = useRecordList();
  const {incomeSum: monthIncome, expenseSum: monthExpense} = sumCalculate(recordList, 'month');
  const {incomeSum: dayIncome, expenseSum: dayExpense} = sumCalculate(recordList, 'day');
  return (
    <Layout>
      <Head/>
      <MonthStatistics incomeMoney={monthIncome} expenseMoney={monthExpense}/>
      <DayStatistics incomeMoney={dayIncome} expenseMoney={dayExpense}/>
      <RecordDetail/>
    </Layout>
  );
};

export {Statistics};
