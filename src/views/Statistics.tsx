import {Layout} from '../component/Layout';
import React from 'react';
import {Head} from '../component/Statistics/Head';
import {MonthStatistics} from '../component/Statistics/MonthStatistics';
import {DayStatistics} from '../component/Statistics/DayStatistics';
import {RecordDetail} from '../component/Statistics/RecordDetail';
import {useRecordList} from '../hooks/useRecordList';
import {sumCalculate} from '../lib/sumCalculate';
import {recordItemType} from '../lib/recordItemType';


const Statistics: React.FC = () => {
  const {recordList} = useRecordList();
  const {incomeSum: monthIncome, expenseSum: monthExpense} = sumCalculate(recordList, 'month');
  const {incomeSum: dayIncome, expenseSum: dayExpense} = sumCalculate(recordList, 'day');
  const sortedList: recordItemType[] = [];
  for (let i = recordList.length - 1; i >= 0; i--) {
    sortedList.push(recordList[i]);
  }
  return (
    <Layout>
      <Head/>
      <MonthStatistics incomeMoney={monthIncome} expenseMoney={monthExpense}/>
      <DayStatistics incomeMoney={dayIncome} expenseMoney={dayExpense}/>
      <RecordDetail recordList={recordList}/>
    </Layout>
  );
};

export {Statistics};
