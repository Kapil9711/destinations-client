import styled from "styled-components";
import UL from "./UL";
import logo from "../../assets/images/logo1.png";
import { useState } from "react";

//======
//styling components started
//======
const NavbarWrapper = styled.nav`
  position: fixed;
  background-color: var(--clr-black);
  color: var(--clr-teal);
  display: grid;
  grid-template-columns: 0.6fr 1fr;
  align-items: center;
  padding: 8px 16px;
  width: 100%;

  //======
  //styling nested element
  //======

  & .icons .hide {
    display: none;
  }
  & .imageWrapper {
    & img {
      height: 70px;
      width: 200px;
      display: inline-block;
    }

    @media (min-width: 1030px) {
      & {
        text-align: center;
      }
    }
  }
  & .icons {
    text-align: right;
    font-size: 2.5rem;
    @media (min-width: 1030px) {
      & {
        display: none;
      }
    }
  }
`;

//======
//styling components ended
//======

//======
//defining component
//======

const Navbar = () => {
  const [active, setActive] = useState(() => true);

  const handleClick = () => {
    setActive((prev) => !prev);
  };
  return (
    <NavbarWrapper>
      <div className="imageWrapper">
        <img src={logo} alt="logo/img" />
      </div>
      <div className="icons">
        <i
          onClick={handleClick}
          className={
            active ? "fa-solid fa-x cross hide" : "fa-solid fa-x cross"
          }
        ></i>
        <i
          onClick={handleClick}
          className={
            active ? "fa-solid fa-bars bars" : "fa-solid fa-bars bars hide"
          }
        ></i>
      </div>
      <UL active={active} />
    </NavbarWrapper>
  );
};

export default Navbar;
