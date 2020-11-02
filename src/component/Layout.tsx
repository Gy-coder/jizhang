import React from 'react'
import {Nav} from "./Nav";
import styled from 'styled-components';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .LayoutContent{
    flex-grow: 1;
    display:flex;
    flex-direction: column;
  }
`
const Layout: React.FC = (props)=>{
  return (
    <LayoutWrapper>
      <div className='LayoutContent'>
        {props.children}
      </div>
      <Nav />
    </LayoutWrapper>
  )
}

export {Layout}