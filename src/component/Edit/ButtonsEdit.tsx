import React from 'react';
import styled from 'styled-components';


const ButtonEditWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  > button {
    color:#ffffff;
    font-size: 18px;
    border:none;
    border-radius: 4px;
    width: 70px;
    height: 40px;
    padding-left: 5px;
    :nth-child(1){
      background: green;
    }
    :nth-child(2){
      background: #8b0000;
      margin-left: 15px;
    }
  }
`;

type Props = {
  onChange: () => void,
  onDelete: () => void
}
const ButtonsEdit: React.FC<Props> = (props:Props) => {
  return (
    <ButtonEditWrapper>
      <button onClick={()=>props.onChange()}>修改</button>
      <button onClick={()=>props.onDelete()}>删除</button>
    </ButtonEditWrapper>
  );
};

export {ButtonsEdit};