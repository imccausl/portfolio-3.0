import React from "react"
import Headroom from "react-headroom"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"

const HeaderContainer = styled("div")`
  position: relative;
  top: 0;
  left: 0;
  height: 3em;
  padding-left: 10px;
  width: 100%;
  z-index: 50;
`

const HeaderContent = styled("div")`
  display: flex;
  justify-content: center;

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

const Header = () => {
  return (
    <Headroom>
      <HeaderContainer>
        <HeaderContent>
          <HeaderStyle>
            <Link to="/#top">
              <span style={{ color: colors.blue700 }}>ian</span>mccaus
              <span style={{ color: colors.blue300 }}>.</span>land
            </Link>
          </HeaderStyle>
        </HeaderContent>
      </HeaderContainer>
    </Headroom>
  )
}

export default Header
