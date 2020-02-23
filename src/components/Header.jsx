import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"

const HeaderContainer = styled("div")`
  position: fixed;
  transition: background 500ms linear;
  left: 0;
  top: 0;
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
  const [darkened, setDarkened] = useState(false)
  const handleScroll = () => {
    setDarkened(window.scrollY >= 70)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", () => handleScroll)
    }
  }, [])
  return (
    <HeaderContainer
      style={{
        background: darkened
          ? "rgba(235, 235, 235, 0.9)"
          : "rgba(235, 235, 235, 0)",
        borderBottom: darkened ? "1px solid rgb(223, 223, 223)" : "none",
      }}
    >
      <HeaderContent>
        <HeaderStyle>
          <Link to="#top">
            <span style={{ color: colors.blue700 }}>ian</span>mccaus
            <span style={{ color: colors.blue300 }}>.</span>land
          </Link>
        </HeaderStyle>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header
