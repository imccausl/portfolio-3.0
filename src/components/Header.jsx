import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"

const HeaderContainer = styled("div")`
  position: absolute;
  left: 0;
  top: 0;
  height: 3em;
  padding-left: 10px;
  background-color: #f4f4f4;
  border-bottom: 1px solid #dfdfdf;
  width: 100%;
`

const HeaderContent = styled("div")`
  display: flex;
  justify-content: space-between;

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

const Header = () => (
  <HeaderContainer>
    <HeaderContent>
      <HeaderStyle>
        <Link to="/">
          <span style={{ color: colors.blue700 }}>ian</span>mccaus
          <span style={{ color: colors.blue300 }}>.</span>land
        </Link>
      </HeaderStyle>
    </HeaderContent>
  </HeaderContainer>
)

export default Header
