import React from 'react';
import styled from 'styled-components';
import {Icon} from '../Icon';
import {Link} from 'react-router-dom';
import {tagItemType} from '../../lib/tagItemType';

const HeadEditWrapper = styled.header`
  background: #ffffff;
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  font-size: 16px;
  >a > .icon{ 
    width: 24px;
    height: 24px;
  }
  > span{
    width: 24px;
    height: 24px;
  }
  > .title{
    display:flex;
    flex-direction: column;
    align-items: center;
    > .icon{
      padding-bottom: 4px;
      width: 30px;
      height: 30px;
    }
  }
`;
type Props = {
  tag:tagItemType
}

const HeadEdit: React.FC<Props> = (props:Props) => {
  return (
    <HeadEditWrapper>
      <Link to='/statistics'>
        <Icon name='left'/>
      </Link>
      <div className='title'>
        <Icon name={props.tag.id}/>
        <span>{props.tag.tagName}</span>
      </div>
      <span></span>
    </HeadEditWrapper>
  );
};

export {HeadEdit};