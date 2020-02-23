import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"

import SocialMediaMenu from "./_ui/SocialMediaMenu"

const FooterContainer = styled("div")`
  padding-bottom: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    text-decoration: none;
    transition: all 100ms ease-in-out;
    padding: 0;
    color: ${colors.blue500};

    &:hover {
      cursor: pointer;
      transition: all 100ms ease-in-out;
      color: ${colors.blue600};
    }
  }
`

const FooterAuthor = styled("div")`
  font-size: 0.75em;
  color: ${colors.blue900};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
`

const Footer = props => {
  const { social } = props

  return (
    <FooterContainer>
      <Link to="/">
        <h3 style={{ margin: 0 }}>
          <span style={{ color: colors.blue700 }}>ian</span>mccaus
          <span style={{ color: colors.blue300 }}>.</span>land
        </h3>
      </Link>
      <SocialMediaMenu socialUsernames={social} />
      <FooterAuthor>© 2019</FooterAuthor>
    </FooterContainer>
  )
}

export default Footer
