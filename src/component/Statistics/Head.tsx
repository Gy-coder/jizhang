import React from 'react';
import styled from 'styled-components';


const HeadWrapper  = styled.header`
   background: #e6e6e6;
   font-size:18px;
   padding:10px;
   font-weight: 500;
`
const Head:React.FC  = ()=>{
  return (
    <HeadWrapper>
      我的记账本
    </HeadWrapper>
  )
}

export {Head}