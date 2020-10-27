import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const NavWrapper = styled.ul`
  display: flex;
  padding: 0;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  > li {
    width: 33.333%;
    font-size:12px;
    height:64px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Nav: React.FC = () => {
  return (
    <NavWrapper>
      <li>
        <Link to="/">记一笔</Link>
      </li>
      <li>
        <Link to="/about">本月概况</Link>
      </li>
      <li>
        <Link to="/users">图表分析</Link>
      </li>
    </NavWrapper>
  );
};

export {Nav};