import React from 'react';
import styled from 'styled-components';
import {RecordItem} from './RecordItem';


const RecordDetailWrapper = styled.div`
  display:flex;
`
const RecordDetail:React.FC = ()=>{
  return (
    <RecordDetailWrapper>
      <RecordItem />
    </RecordDetailWrapper>
  )
}

export {RecordDetail}