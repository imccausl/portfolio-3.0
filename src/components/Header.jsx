import React, { useState } from "react"
import Headroom from "react-headroom"
import { IoIosStats, IoMdMusicalNotes } from "react-icons/io"
import { FaClipboard, FaQuestion, FaPlus } from "react-icons/fa"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"

import { NavMenuItem } from "../components/_ui/NavMenu"

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

  border: 5px solid #f5f8ff;
  border-radius: 50%;

  text-decoration: none;
  background-color: #edf3ff;

  transform: translateX(150%);
  width: 75px;
  height: 75px;

  bottom: 25px;
  right: 25px;
  padding: 0;
  outline: 0;

  z-index: 1000;
  transition: all 0.5s ease-in-out;

  font-size: 2em;

  &:hover,
  &:focus {
    outline: 0;
    color: rgb(58, 103, 178);
    border: 5px solid orange;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    transform: translateX(0%)
      rotate(${props => (props.open ? "45deg" : "0deg")})
      scale(${props => (props.open ? "0.5" : "1")});
  }
`

const NavMenu = styled("div")`
  position: fixed;
  display: flex;

  flex-wrap: nowrap;
  flex-direction: row-reverse;
  justify-content: flex-start;
  align-items: center;

  bottom: 25px;
  right: 25px;
  transition: all 0.5s ease-in-out;
  z-index: 999;

  width: 200px;
  height: 75px;

  transform: translateX(150%)
    translateY(${props => (props.open ? props.pos : "0%")});

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    transform: translateX(0%)
      translateY(${props => (props.open ? props.pos : "0%")});
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
                <NavLink>Projects</NavLink>
                <NavLink>Music</NavLink>
                <NavLink>About</NavLink>
              </NavStyle>
            </div>
          </HeaderContent>
        </Headroom>
      </HeaderContainer>
      <NavMenuButton
        onClick={handleNavMenuClick}
        aria-expanded={isNavMenuOpen}
        aria-label={
          isNavMenuOpen ? "Close navigation menu" : "Open navigation menu"
        }
        open={isNavMenuOpen}
      >
        <FaPlus />
      </NavMenuButton>
      <NavMenu open={isNavMenuOpen} pos="-100%">
        <NavMenuItem
          to="/#music"
          name="about"
          icon={<FaQuestion />}
          closeCallback={handleNavMenuClick}
          open={isNavMenuOpen}
        />
      </NavMenu>
      <NavMenu open={isNavMenuOpen} pos="-210%">
        <NavMenuItem
          to="/#music"
          name="music"
          icon={<IoMdMusicalNotes />}
          closeCallback={handleNavMenuClick}
          open={isNavMenuOpen}
        />
      </NavMenu>
      <NavMenu open={isNavMenuOpen} pos="-320%">
        <NavMenuItem
          to="/#music"
          name="projects"
          icon={<FaClipboard />}
          closeCallback={handleNavMenuClick}
          open={isNavMenuOpen}
        />
      </NavMenu>
      <NavMenu open={isNavMenuOpen} pos="-430%">
        <NavMenuItem
          to="/#music"
          name="stats"
          icon={<IoIosStats />}
          closeCallback={handleNavMenuClick}
          open={isNavMenuOpen}
        />
      </NavMenu>
    </>
  )
}

export default Header
