import {Icon} from '../Icon';
import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const RecordItemWrapper = styled(Link)`
  background: #ffffff;
  margin:4px 12px;
  padding: 10px 8px;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  > .icon {
   width: 30px;
   height: 30px;
  }
  > .bill{
    display:flex;
    flex-direction: column;
    text-align: right;
    > .amount{
      font-size: 16px;
      font-weight: 700;
      color: #000000;
    }
    > .time{
      color:#c5c5c5;
      font-size: 12px;
    }
  }
`;
const RecordItem: React.FC = () => {
  return (
    <RecordItemWrapper to=''>
      <Icon name='others'/>
      <span>其它</span>
      <span className='bill'>
        <span className='amount'>$0</span>
        <span className='time'>12月1日 12:00</span>
      </span>
    </RecordItemWrapper>
  );
};

export {RecordItem};