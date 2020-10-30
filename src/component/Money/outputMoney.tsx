import React from 'react';
import styled from 'styled-components';
import {Icon} from '../Icon';

const OutPutMoneyWrapper = styled.div`
  font-size: 20px;
  display:flex;
  flex-direction: row;
  background:#ffffff;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  > .icon{
    width: 24px;
    height: 24px;
    fill: red;
  }
`;

type Props = {
  name:string,
  amount:number
}
const OutputMoney: React.FC<Props> = (props) => {
  return (
    <OutPutMoneyWrapper>
      <Icon name={props.name}/>
      <span>{'$' + props.amount.toString()}</span>
    </OutPutMoneyWrapper>
  );
};

export {OutputMoney};