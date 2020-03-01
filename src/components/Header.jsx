import React from "react"
import Headroom from "react-headroom"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"

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

const Header = () => {
  return (
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
  )
}

export default Header
