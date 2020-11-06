import React from 'react';
import styled from 'styled-components';


const NodeEditWrapper = styled.label`
  background: #ffffff;
  margin-top: 1px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  > span {
    padding-right: 16px;
  }
  > input {
    text-align: right;
    flex-grow: 1;
    height: 40px;
    border: none;
    padding-right: 16px;
  }
`
const NoteEdit = ()=>{
  return (
    <NodeEditWrapper>
      <span>金额</span>
      <input />
    </NodeEditWrapper>
  )
}

export {NoteEdit}