import React from 'react';
import styled from 'styled-components';
import {TagItem} from './tagItem';
import {tagItemType} from '../../lib/tagItemType';

const tagsData: tagItemType[] = [
  {id: 'others', tagName: '其它'},
  {id: 'food', tagName: '餐饮'},
  {id: 'shopping', tagName: '购物'},
  {id: 'clothes', tagName: '服饰'},
  {id:'transport',tagName: '交通'}
];
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

const Tags: React.FC = () => {
  return (
    <TagsWrapper>
      {tagsData.map(item => {
        return (
          <TagItem key={item.id} tagName={item.tagName} id={item.id}/>
        );
      })}
    </TagsWrapper>
  );
};

export {Tags};