import styled from "styled-components";
import Form from "./Form";

const RegisterWrapper = styled.div`
  background-color: hsl(var(--clr-teal-hs) 13%);
  color: hsl(var(--clr-teal-hs) 70%);
  min-height: 100vh;
  padding-top: 90px;
  padding-left: 16px;
  padding-right: 16px;

  //styling nested elements
  & h1 {
    margin-top: 16px;
    text-transform: uppercase;
    text-align: center;
  }
`;

const Register = () => {
  return (
    <RegisterWrapper>
      <h1>register Form</h1>
      <Form />
    </RegisterWrapper>
  );
};

export default Register;
