import React from "react"
import Headroom from "react-headroom"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"

const HeaderContainer = styled("div")`
  background-color: white;

  .headroom--pinned,
  .headroom--unpinned {
    background-color: white;
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);

    div {
      padding: 0 4em;
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
  margin: 0;
`

const NavStyle = styled("nav")`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  margin: 0;
  font-size: 1.4em;
  font-weight: 00;
  color: black;

  a {
    color: rgb(58, 103, 178);
    text-decoration: none;
  }
`

const Header = () => {
  return (
    <HeaderContainer>
      <Headroom>
        <HeaderContent>
          <HeaderStyle>
            <Link to="/#top">
              <span style={{ color: colors.blue700 }}>ian</span>mccaus
              <span style={{ color: colors.blue300 }}>.</span>land
            </Link>
          </HeaderStyle>
        </HeaderContent>
      </Headroom>
    </HeaderContainer>
  )
}

export default Header
