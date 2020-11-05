import {Layout} from '../component/Layout';
import React from 'react';
import {Head} from '../component/Statistics/Head';
import {MonthStatistics} from '../component/Statistics/MonthStatistics';
import {DayStatistics} from '../component/Statistics/DayStatistics';
import {RecordDetail} from '../component/Statistics/RecordDetail';
import {useRecordList} from '../hooks/useRecordList';
import dayjs from 'dayjs';

const Statistics: React.FC = () => {
  const {recordList} = useRecordList();
  let incomeSum = 0
  let expenseSum = 0
  const monthRecordList = recordList.filter(item => dayjs().isSame(dayjs(item.createAt), 'month'));
  if (monthRecordList.length > 0) {
    monthRecordList.map(item => console.log(dayjs(item.createAt).format('MM月DD日 H时m分')));
    const incomeList = recordList.filter(item => item.type === '+');
    const expenseList = recordList.filter(item => item.type === '-');
    incomeSum = incomeList.reduce((sum, item) => {
      return sum += item.amount;
    }, 0);
    expenseSum = expenseList.reduce((sum, item) => {
      return sum += item.amount;
    }, 0);
    console.log(incomeSum);
    console.log(expenseSum);
  }
  return (
    <Layout>
      <Head/>
      <MonthStatistics incomeMoney={incomeSum} expenseMoney={expenseSum}/>
      <DayStatistics/>
      <RecordDetail/>
    </Layout>
  );
};

export {Statistics};
