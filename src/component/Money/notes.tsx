import React from 'react';
import styled from 'styled-components';

const NotesWrapper = styled.label`
  background: #ffffff;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  > input{
    text-align: right;
    line-height: 48px;
    flex-grow: 1;
    padding: 0 16px;
    border: none;
  }
  > span {
    padding-right: 16px;
  }
`

const Notes:React.FC = ()=>{
  return (
    <NotesWrapper>
      备注
      <input type='text' placeholder='请输入备注信息'/>
    </NotesWrapper>
  )
}


export {Notes}