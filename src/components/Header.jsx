import React, { useState } from "react"
import Headroom from "react-headroom"
import { IoIosStats, IoMdMusicalNotes } from "react-icons/io"
import { FaClipboard, FaQuestion, FaPlus } from "react-icons/fa"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"

const HeaderContainer = styled("div")`
  background-color: white;
  padding: 0 2em;

  .headroom--pinned,
  .headroom--unpinned {
    background-color: white;
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);

    div {
      padding: 0 2em;
    }
  }
`

const HeaderContent = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  max-width: 1100px;
  margin: 0 auto;

  h1 {
    font-size: 2.2em;

    a {
      text-decoration: none;
      transition: all 100ms ease-in-out;
      color: ${colors.blue500};

      &:hover {
        cursor: pointer;
        transition: all 100ms ease-in-out;
        color: ${colors.blue600};
        background-color: ${colors.blue200};
      }
    }
  }
`

const HeaderStyle = styled("h1")`
  margin: 10px 0;
`

const LinkStyle = styled(Link)`
  background-color: #edf3ff;
  border-radius: 0.25em;
  padding: 2px 10px;
`

const NavStyle = styled("nav")`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  margin: 0;
  color: black;

  transition: opacity 0.3s ease-in-out;
  opacity: 1;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    opacity: 0;
  }
`

const NavLink = styled(Link)`
  flex-shrink: 1;
  color: rgb(58, 103, 178);
  background-color: #edf3ff;
  text-decoration: none;

  text-transform: uppercase;
  font-size: 0.8em;
  font-weight: 800;

  padding: 4px 10px;
  border-radius: 1em;
  margin-right: 10px;

  &:last-of-type {
    margin-right: 0;
  }
`
const NavMenuButton = styled("button")`
  position: fixed;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);

  border: 3px solid #f5f8ff;
  border-radius: 50%;

  text-decoration: none;
  background-color: #edf3ff;

  transform: translateX(150%);
  width: 75px;
  height: 75px;

  bottom: 25px;
  right: 25px;
  padding: 0;

  z-index: 1000;
  transition: all 0.5s ease-in-out;

  font-size: 2em;

  &:hover {
    color: rgb(58, 103, 178);
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    transform: translateX(0%)
      rotate(${props => (props.open ? "45deg" : "0deg")})
      scale(${props => (props.open ? "50%" : "100%")});
  }
`

const NavMenu = styled(Link)`
  position: fixed;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: black;
  bottom: 25px;
  right: 25px;
  transition: all 0.5s ease-in-out;
  z-index: 999;
  box-shadow: ${props =>
    props.open ? "0 4px 20px 0 rgba(0, 0, 0, 0.1)" : "0"};
  border: 3px solid #f5f8ff;
  text-decoration: none;
  transform: translateX(150%)
    translateY(${props => (props.open ? props.pos : "0%")}) scale(80%);
  background-color: #edf3ff;
  border-radius: 50%;

  width: 75px;
  height: 75px;
  font-size: 2em;

  &:hover {
    color: rgb(58, 103, 178);
    transform: translateY(${props => (props.open ? props.pos : "0%")})
      scale(105%);
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    transform: translateX(0%)
      translateY(${props => (props.open ? props.pos : "0%")}) scale(80%);
  }
`

const Header = () => {
  const [isNavMenuOpen, toggleNavMenuOpen] = useState(false)

  function handleNavMenuClick() {
    toggleNavMenuOpen(!isNavMenuOpen)
  }

  return (
    <>
      <HeaderContainer>
        <Headroom>
          <HeaderContent>
            <HeaderStyle>
              <LinkStyle to="/#top">
                <span style={{ color: colors.blue700 }}>ian</span>mccaus
                <span style={{ color: colors.blue300 }}>.</span>land
              </LinkStyle>
            </HeaderStyle>
            <div style={{ padding: 0 }}>
              <NavStyle>
                <NavLink>Statistics</NavLink>
                <NavLink>Selected Projects</NavLink>
                <NavLink>About</NavLink>
              </NavStyle>
            </div>
          </HeaderContent>
        </Headroom>
      </HeaderContainer>
      <NavMenuButton onClick={handleNavMenuClick} open={isNavMenuOpen}>
        <FaPlus />
      </NavMenuButton>
      <NavMenu onClick={handleNavMenuClick} open={isNavMenuOpen} pos="-100%">
        <FaQuestion />
      </NavMenu>
      <NavMenu onClick={handleNavMenuClick} open={isNavMenuOpen} pos="-210%">
        <IoMdMusicalNotes />
      </NavMenu>
      <NavMenu onClick={handleNavMenuClick} open={isNavMenuOpen} pos="-320%">
        <FaClipboard />
      </NavMenu>
      <NavMenu onClick={handleNavMenuClick} open={isNavMenuOpen} pos="-430%">
        <IoIosStats />
      </NavMenu>
    </>
  )
}

export default Header
