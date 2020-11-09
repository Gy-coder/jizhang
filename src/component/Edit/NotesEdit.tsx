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

type Props = {
  title:string,
  content:string,
  onChange:(e:string)=>void
}
const NoteEdit:React.FC<Props> = (props:Props)=>{
  return (
    <NodeEditWrapper>
      <span>{props.title}</span>
      <input type='text' value={props.content} onChange={(e)=>props.onChange(e.target.value)}/>
    </NodeEditWrapper>
  )
}

export {NoteEdit}