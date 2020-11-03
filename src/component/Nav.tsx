import React from 'react';
import {NavLink} from 'react-router-dom';
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
  .selected{
    color:#fd6b71;
    fill:#fd6b71;
  }
`;
const Nav: React.FC = () => {
  return (
    <NavWrapper>
      <li>
        <NavLink to="/money" activeClassName='selected'>
          <Icon name='money'/>
          记一笔
        </NavLink>
      </li>
      <li>
        <NavLink to="/statistics" activeClassName='selected'>
          <Icon name='statistics'/>
          本月概况
        </NavLink>
      </li>
      <li>
        <NavLink to="/chart" activeClassName='selected'>
          <Icon name='chart'/>
          图表分析
        </NavLink>
      </li>
    </NavWrapper>
  );
};

export {Nav};