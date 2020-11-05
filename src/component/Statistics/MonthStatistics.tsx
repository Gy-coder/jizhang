import React from 'react';
import styled from 'styled-components';
import {Icon} from '../Icon';
import {Link} from 'react-router-dom';


const MonthStatisticsWrapper = styled.div`
  background: #ffffff;
  display:flex;
  flex-direction: column;
  margin: 8px 12px;

  > .title{
      color: #c5c5c5;
      font-size: 14px;
      padding: 5px 8px;
  }
  > .expense {
    font-size: 28px;
    padding-left: 10px;
    font-weight: 700;
  }
  > .budget{
    display: flex;
    justify-content: space-between;
     > span {
        font-size: 14px;
        padding: 5px 8px;
        > .parcel{
          color: #c5c5c5;
          padding-right: 8px;
        }
        > button {
          border:none;
          background: #ffffff;
       }
     } 
  }
  > .chart {
     display:flex;
     justify-content: center;
     align-items: center;
     padding: 15px;
     > a {
        color: #228b22;
        fill: #228b22;
        font-size:14px;
        > .icon {
          width: 14px;
          height: 14px;
        }
     }
     >a > span{
      padding-left: 3px;
     }
  }
  
`;
const MonthStatistics: React.FC = () => {
  return (
    <MonthStatisticsWrapper>
      <div className='title'>本月支出</div>
      <span className='expense'>$ 0</span>
      <div className='budget'>
        <span>
          <span className='parcel'>本月收入</span>
          <span>$0</span>
        </span>
        <span>
          <span className='parcel'>预算剩余</span>
          <button>设置预算</button>
        </span>
      </div>
      <div className='chart'>
        <Link to='/chart'>
          <Icon name='chart' />
          <span>查看图表分析</span>
        </Link>
      </div>
    </MonthStatisticsWrapper>
  );
};

export {MonthStatistics};