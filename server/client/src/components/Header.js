import React from 'react';
import styled from 'styled-components';


const MenuLink = styled.a``;
 
function Header() {
  return (
    <Nav>
      <NavHeader>
        <NavLeft>About Us</NavLeft>
 
        <NavCenter>RSVP</NavCenter>
 
        <NavRight>Hotel Info</NavRight>

      </NavHeader>
    </Nav>
  );
}
 
export default Header;

const Nav = styled.div`
  background-color: #0002;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`;
 
const NavHeader = styled.div`
  max-width: 1010px;
  padding: 26px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;
 
const NavLeft = styled.div`
  width: 33.333%;
  text-align: left;
`;
 
const NavCenter = styled.div`
  width: 33.333%;
  text-align: center;
`;
 
const NavRight = styled.div`
  width: 33.333%;
  text-align: right;
`;
 
