import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"

const HeaderContainer = styled("div")``

const HeaderContent = styled("div")`
  display: flex;
  justify-content: space-between;

  h1 {
    margin-bottom: 0em;
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

const Header = () => (
  <HeaderContainer>
    <HeaderContent>
      <h1>
        <Link to="/">
          <span style={{ color: colors.blue700 }}>ian</span>mccaus
          <span style={{ color: colors.blue300 }}>.</span>land
        </Link>
      </h1>
    </HeaderContent>
  </HeaderContainer>
)

export default Header
