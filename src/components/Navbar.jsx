import { Link } from "react-router-dom";
import styled, { css } from "styled-components/macro";
import { menuLinks } from "../assets/data/NavMenuLinks";
import logoWhite from "../assets/images/logoWhite.png";

const Nav = styled.nav`
  height: 100px;
  width: 100%;
  position: fixed;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NavMenu = styled(Link)`
  height: 100%;
  object-fit: cover;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.img`
  height: 100%;
  width: 100%;
  cursor: pointer;
`;
const NavLink = css`
  color: #fff;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  opacity: 0.7;
  transition: 0.3s ease-in-out;
  cursor: pointer;
`;
const NavLinks = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
`;
const Links = styled(Link)`
  ${NavLink}
  &:hover {
    opacity: 1;
    transition: 0.3s ease-in-out;
  }
`;

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu to="/">
          <Logo src={logoWhite} alt="GlobalEventAuctionLogo" />
        </NavMenu>
        <NavLinks>
          {menuLinks.map((item, index) => (
            <Links to={item.link} key={index}>
              {item.title}
            </Links>
          ))}
        </NavLinks>
      </Nav>
    </>
  );
};

export default Navbar;
