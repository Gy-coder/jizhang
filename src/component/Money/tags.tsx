import React from 'react';
import styled from 'styled-components';
import {TagItem} from './tagItem';
import {tagItemType} from '../../lib/tagItemType';
import {tagsData} from '../../lib/incomeTagData';


const TagsWrapper = styled.div`
  background: #ffffff;
  display:flex;
  flex-direction: row;
  align-content: flex-start;
  padding: 16px;  
  flex-wrap: wrap;
  flex-grow: 1;
  padding-left: 35px;
  font-size: 10px;
`;

type Props = {
  onChange: (tag:tagItemType) => void
}
const Tags: React.FC<Props> = (props:Props) => {

  return (
    <TagsWrapper>
      {tagsData.map(item => {
        return (
          <TagItem key={item.id}
                   tagName={item.tagName}
                   id={item.id}
                   onChange={(tag)=>props.onChange(tag)}/>
        );
      })}
    </TagsWrapper>
  );
};

export {Tags};