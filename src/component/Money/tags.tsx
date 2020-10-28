import React from 'react';
import styled from 'styled-components';
import {Icon} from '../Icon';

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
  border:1px solid red;
  background: #ffffff;
  display:flex;
  flex-direction: row;
  padding: 16px;  
  flex-wrap: wrap;
  flex-grow: 1;
  align-content: center;
  padding-left: 35px;
`;
const TagItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin:10px 20px;
  > .icon{
    width: 24px;
    height: 24px;
    border: 1px solid red;
  }
`
const Tags: React.FC = () => {
  return (
    <TagsWrapper>
      {tagsData.map(item => {
        return (
          <TagItemWrapper>
            <Icon name={item.id}/>
            <span>{item.name}</span>
          </TagItemWrapper>
        );
      })}
    </TagsWrapper>
  );
};

export {Tags};