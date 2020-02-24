import React, { useState, useEffect } from "react"
import { useSpring, animated } from "react-spring"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"

const HeaderContainer = styled("div")`
  position: static;
  transition: transform 300ms linear;
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
  const [isHeaderVisible, setHeaderVisible] = useState(false)
  const [lastScrollTop, setLastScrollTop] = useState(0)
  // const headerProps = useSpring({
  //   top: isHeaderVisible ? 0 : -1,
  //   position: isHeaderVisible ? "fixed" : "static",
  // })
  const handleScroll = () => {
    const st = window.pageYOffset || document.body.scrollTop

    setHeaderVisible(st < lastScrollTop)
    setLastScrollTop(st <= 0 ? 0 : st)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", () => handleScroll)
    }
  }, [lastScrollTop])

  const scrollTopThresholdReached = lastScrollTop >= 30
  let transformValue = "0%"

  if (
    (isHeaderVisible && scrollTopThresholdReached) ||
    (isHeaderVisible && !scrollTopThresholdReached) ||
    (!isHeaderVisible && !scrollTopThresholdReached)
  ) {
    transformValue = "0%"
  } else {
    transformValue = "-100%"
  }
  return (
    <HeaderContainer
      delay={300}
      style={{
        position: scrollTopThresholdReached ? "fixed" : "absolute",
        transform: `translateY(${transformValue})`,
      }}
    >
      <HeaderContent>
        <HeaderStyle>
          <Link to="/#top">
            <span style={{ color: colors.blue700 }}>ian</span>mccaus
            <span style={{ color: colors.blue300 }}>.</span>land
          </Link>
        </HeaderStyle>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header
