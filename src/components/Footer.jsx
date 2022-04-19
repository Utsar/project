import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";

const FooterLinks = css`
  cursor: pointer;
  color: whitesmoke;
  text-decoration: none;
`;
const Container = styled.footer`
  width: 100%;
  position: absolute;
  bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  &:nth-of-type(1n) {
    ${FooterLinks}
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const FooterLeft = styled.div``;
const FooterMiddle = styled.div``;
const FooterRight = styled.div``;

const Footer = () => {
  return (
    <>
      <Container>
        <FooterLeft>Hello</FooterLeft>
        <FooterMiddle>
          &copy; GlobalEventAuction.com All rights reserved 2021
        </FooterMiddle>
        <FooterRight>About</FooterRight>
      </Container>
    </>
  );
};

export default Footer;
