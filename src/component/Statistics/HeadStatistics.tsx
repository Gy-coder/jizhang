import React from 'react';
import styled from 'styled-components';


const HeadWrapper  = styled.header`
   background: #e6e6e6;
   font-size:18px;
   padding:10px;
   font-weight: 500;
`
const HeadStatistics:React.FC  = ()=>{
  return (
    <HeadWrapper>
      我的记账本
    </HeadWrapper>
  )
}

export {HeadStatistics}