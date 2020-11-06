import dayjs from 'dayjs';

import {recordItemType} from '../lib/recordItemType';
export const sumCalculate = (list:recordItemType[], unit:('month' | 'day' | 'year' | 'week'))=>{
  let incomeSum = 0
  let expenseSum = 0
  const unitMonth = list.filter(item => dayjs().isSame(dayjs(item.createAt), unit));
  if (unitMonth.length > 0) {
    const incomeList = list.filter(item => item.type === '+');
    const expenseList = list.filter(item => item.type === '-');
    incomeSum = incomeList.reduce((sum, item) => {
      return sum += item.amount;
    }, 0);
    expenseSum = expenseList.reduce((sum, item) => {
      return sum += item.amount;
    }, 0);
  }
  return {incomeSum,expenseSum}
}