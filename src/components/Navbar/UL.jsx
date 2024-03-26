import styled from "styled-components";
import { NavLink } from "react-router-dom";

//======
//styling component
//======
const UlWrapper = styled.ul`
  list-style: none;
  position: absolute;
  padding: 8px 16px;
  width: 100%;
  top: 100px;
  left: -1050px;
  opacity: 0;
  background-color: hsl(0 0% 10%);
  transition: left 1s cubic-bezier(0, 0.76, 0.01, 1.12), opacity 1s ease;

  &.original-position {
    left: 0;
    opacity: 1;
  }

  @media (min-width: 1030px) {
    & {
      background-color: var(--clr-black);
      position: initial;
      opacity: 1;
      display: flex;
      justify-content: right;
      gap: 12px;
    }
  }

  //styling nested elemetns
  & li a {
    display: block;
    border-radius: 25px 1px 25px 1px;
    padding: 6px 0px;
    margin: 8px 0;
    font-size: 1.4rem;
    text-align: center;
    transition: background-color 0.3s linear, outline 0.3s linear,
      color 0.3s linear;
    @media (min-width: 1030px) {
      padding: 6px 16px;
    }
  }

  @media (pointer: fine) {
    & li a:hover {
      background-color: hsl(var(--clr-light-black-hs) 35%);
      color: var(--clr-white);
      outline: 3px solid var(--clr-white);
      outline-offset: 4px;
      cursor: pointer;
    }
    & li a:active {
      background-color: hsl(var(--clr-light-black-hs) 15%);
    }
  }
  @media (pointer: coarse) {
    & li a:active {
      background-color: hsl(var(--clr-light-black-hs) 35%);
      color: var(--clr-white);
      outline: 3px solid var(--clr-white);
      outline-offset: 4px;
    }
  }
`;

const UL = ({ active }) => {
  return (
    <UlWrapper className={active ? "" : "original-position"}>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/About">About</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/destinations">Destinations</NavLink>
      </li>
    </UlWrapper>
  );
};

export default UL;
