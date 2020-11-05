import {Icon} from '../Icon';
import React from 'react';
import styled from 'styled-components';
import {tagItemType} from '../../lib/tagItemType';



const TagItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin:10px 20px;
  > .icon{
    width: 24px;
    height: 24px;
  }
`;


type Props = {
  onChange:(tag:tagItemType) => void
} & tagItemType
const TagItem:React.FC<Props> = (props: Props) => {
  return (
    <TagItemWrapper onClick={()=>props.onChange({id:props.id,tagName:props.tagName})}>
      <Icon name={props.id}/>
      <span>{props.tagName}</span>
    </TagItemWrapper>
  );
};

export {TagItem};