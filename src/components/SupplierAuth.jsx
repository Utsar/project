import React from "react";
import styled from "styled-components";

import Navbar from "./Navbar";

const FormWrapper = styled.div``;
const LoginWrapper = styled.div``;
const LoginForm = styled.div``;
const Input = styled.div``;
const RegisterWrapper = styled.div``;

const SupplierAuth = () => {
  return (
    <>
      <Navbar onlyLogo displayNoLinks />
      <FormWrapper>
        <LoginWrapper>
          <LoginForm>
            <Input />
          </LoginForm>
        </LoginWrapper>
        <RegisterWrapper></RegisterWrapper>
      </FormWrapper>
    </>
  );
};

export default SupplierAuth;
