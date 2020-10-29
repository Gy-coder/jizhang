import React, {useState} from 'react';
import styled from 'styled-components';



const ChooseTypeWrapper = styled.ol`
  display: flex;
  flex-direction: row;
  background:#e8e8e8;
  justify-content: center;
  > li{
    width: 10%;
    height:48px;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size:18px;
    margin:0 15px;
    position: relative;
    &.select::after{
      content: '';
      background: #333;
      width: 100%;
      height: 4px;
      position:absolute;
      bottom: 0;
      left:0;
    }
  }
`;

const ChooseType: React.FC = (props) => {
  const [type,setType] = useState<('-' | '+')>('-')
  const typeClick = (type:('-' | '+'))=>{
    setType(type)
  }
  return (
    <ChooseTypeWrapper>
      <li className={type === '-' ? 'select' : ''}
          onClick={()=>typeClick('-')}
      >支出</li>
      <li className={type === '+' ? 'select' : ''}
          onClick={()=>typeClick('+')}
      >收入</li>
    </ChooseTypeWrapper>
  );
};


export {ChooseType};