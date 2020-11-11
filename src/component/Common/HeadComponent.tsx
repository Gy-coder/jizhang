import React from 'react';
import styled from 'styled-components';


const HeadWrapper = styled.header`
   background: #e6e6e6;
   font-size:18px;
   padding:10px;
   font-weight: 500;
`;

type Props = {
  title:string
}
const HeadComponent: React.FC<Props> = (props:Props) => {
  return (
    <HeadWrapper>
      {props.title}
    </HeadWrapper>
  );
};

export {HeadComponent};