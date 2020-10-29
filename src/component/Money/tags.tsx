import React from 'react';
import styled from 'styled-components';
import {TagItem} from './tagItem';

type tagsDataType = {
  id: string,
  name: string
}
const tagsData: tagsDataType[] = [
  {id: 'others', name: '其它'},
  {id: 'food', name: '餐饮'},
  {id: 'shopping', name: '购物'},
  {id: 'clothes', name: '服饰'},
  {id: 'transport', name: '交通'},
  {id: 'transport', name: '交通'},
  {id: 'transport', name: '交通'},
  {id: 'transport', name: '交通'},
  {id: 'transport', name: '交通'},
];
const TagsWrapper = styled.div`
  background: #ffffff;
  display:flex;
  flex-direction: row;
  padding: 16px;  
  flex-wrap: wrap;
  flex-grow: 1;
  align-content: center;
  padding-left: 35px;
`;

const Tags: React.FC = () => {
  return (
    <TagsWrapper>
      {tagsData.map(item => {
        return (
          <TagItem tagName={item.name} id={item.id}/>
        );
      })}
    </TagsWrapper>
  );
};

export {Tags};