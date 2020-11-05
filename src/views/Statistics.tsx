import {Layout} from '../component/Layout';
import React from 'react';
import {Head} from '../component/Statistics/Head';
import {MonthStatistics} from '../component/Statistics/MonthStatistics';
import {DayStatistics} from '../component/Statistics/DayStatistics';
import {RecordDetail} from '../component/Statistics/RecordDetail';

const Statistics:React.FC =()=> {
  return (
    <Layout>
      <Head />
      <MonthStatistics />
      <DayStatistics />
      <RecordDetail />
    </Layout>
  );
}

export {Statistics}
