import {Icon} from '../Icon';
import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {tagItemType} from '../../lib/tagItemType';
import dayjs from 'dayjs';


const RecordItemWrapper = styled.div`
  > a {
    background: #ffffff;
    margin:4px 12px;
    padding: 10px 8px;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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
  }
 
`;

type Props = {
  tag: tagItemType,
  amount: number,
  time: string
}
const RecordItem: React.FC<Props> = (props: Props) => {
  return (
    <RecordItemWrapper>
      <Link to=''>
        <Icon name={props.tag.id}/>
        <span>{props.tag.tagName}</span>
        <span className='bill'>
          <span className='amount'>{`$ ${props.amount}`}</span>
          <span className='time'>{dayjs(props.time).format('MM月DD日 H:mm')}</span>
      </span>
      </Link>

    </RecordItemWrapper>
  );
};

export {RecordItem};