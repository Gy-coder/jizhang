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
  >.icon.red{
    width: 24px;
    height: 24px;
    fill: #fd6b71;
  }
  >.icon.blue{
    width: 24px;
    height: 24px;
    fill: #5fa0fa;
  }
`;

type Props = {
  name:string,
  amount:number,
  type:string
}
const OutputMoney: React.FC<Props> = (props) => {
  return (
    <OutPutMoneyWrapper>
      <Icon name={props.name} type={props.type}/>
      <span>{'$' + props.amount.toString()}</span>
    </OutPutMoneyWrapper>
  );
};

export {OutputMoney};