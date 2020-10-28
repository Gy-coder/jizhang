import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Icon} from './Icon';


const NavWrapper = styled.ul`
  display: flex;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  background: #ffffff;
  > li {
    width: 33.333%;
    font-size:12px;
    height:64px;
    display: flex;
    justify-content: center;
    align-items: center;
    > a{
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;       
     > .icon{
        width: 24px;
        height: 24px;
    }
   }
  }
`;
const Nav: React.FC = () => {
  return (
    <NavWrapper>
      <li>
        <Link to="/money">
          <Icon name='money'/>
          记一笔
        </Link>
      </li>
      <li>
        <Link to="/statistics">
          <Icon name='statistics'/>
          本月概况
        </Link>
      </li>
      <li>
        <Link to="/chart">
          <Icon name='chart'/>
          图表分析
        </Link>
      </li>
    </NavWrapper>
  );
};

export {Nav};