import styled from "styled-components";

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  letter-spacing: 1px;
  padding: 12px 4px;
  // styling nested elements
  & label {
    margin-top: 16px;
    font-size: 1.3rem;
    padding-left: 16px;
  }
  & input {
    margin-top: 4px;
    padding: 6px 16px;
    font-size: 1.7rem;
    border-radius: 100px;
    border: none;
    letter-spacing: 1px;
    background-color: hsl(var(--clr-teal-hs) 30%);
    transition: color 0.3s linear, background-color 0.3s linear,
      outline 0.2s linear;

    &::placeholder {
      color: hsl(0 0% 50%);
    }

    @media (pointer: coarse) {
      &:focus {
        background-color: hsl(var(--clr-teal-hs) 45%);
        color: var(--clr-white);
        outline: 3px solid white;
        outline-offset: 4px;
        font-weight: 600;

        &::placeholder {
          color: hsl(0 0% 35%);
        }
      }
    }
    @media (pointer: fine) {
      &:hover {
        background-color: hsl(var(--clr-teal-hs) 55%);
        outline: 4px solid white;
        outline-offset: 3px;
      }
      &:focus {
        background-color: hsl(var(--clr-teal-hs) 45%);
        color: var(--clr-white);
        outline: 3px solid white;
        outline-offset: 4px;
        font-weight: 600;

        &::placeholder {
          color: hsl(0 0% 35%);
        }
      }
    }
  }

  & button {
    font-size: 1.8rem;
    border-radius: 100px;
    background-color: hsl(var(--clr-teal-hs) 45%);
    padding: 6px 16px;
    margin-top: 32px;
    border: none;
    outline: 3px solid hsl(0 0% 70%);
    outline-offset: 2px;
    transition: background-color 0.2s linear;

    @media (pointer: coarse) {
      &:active {
        background-color: hsl(var(--clr-teal-hs) 60%);
        outline: 3px solid white;
        outline-offset: 3px;
      }
    }

    @media (pointer: fine) {
      &:hover {
        background-color: hsl(var(--clr-teal-hs) 60%);
        outline: 3px solid white;
        outline-offset: 3px;
      }
      &:active {
        background-color: hsl(var(--clr-teal-hs) 40%);
      }
    }
  }
`;

const Form = () => {
  return (
    <FormWrapper>
      <label htmlFor="username">UserName</label>
      <input
        autoComplete="off"
        placeholder="kapil rajput"
        type="text"
        id="username"
        name="username"
      />
      <label htmlFor="email">Email</label>
      <input
        autoComplete="off"
        placeholder="e.g kapil@gmail.com"
        type="email"
        id="email"
        name="email"
      />
      <label htmlFor="password">Password</label>
      <input autoComplete="off" type="password" id="password" name="password" />
      <button type="submit">Register</button>
    </FormWrapper>
  );
};

export default Form;
