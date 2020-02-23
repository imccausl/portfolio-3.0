import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import { SocialMediaIconsReact } from "social-media-icons-react"

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

const SocialContainer = styled("div")`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 10px;

  a {
    margin-right: 10px;
  }

  a:last-of-type {
    margin-right: 0;
  }
`

const Footer = props => {
  console.log(props)
  const {
    social: { github, codepen, linkedin },
  } = props

  return (
    <FooterContainer>
      <Link to="/">
        <h3 style={{ margin: 0 }}>
          <span style={{ color: colors.blue700 }}>ian</span>mccaus
          <span style={{ color: colors.blue300 }}>.</span>land
        </h3>
      </Link>
      <SocialContainer>
        <SocialMediaIconsReact
          borderColor="rgba(0,0,0,0.25)"
          borderWidth="5"
          borderStyle="solid"
          icon="github"
          iconColor="rgba(255,255,255,1)"
          iconSize="5"
          roundness="50%"
          url={`https://www.github.com/${github}`}
          size="50"
        />
        <SocialMediaIconsReact
          borderColor="rgba(0,0,0,0.25)"
          borderWidth="5"
          borderStyle="solid"
          icon="codepen"
          iconColor="rgba(255,255,255,1)"
          iconSize="5"
          roundness="50%"
          url={`https://www.codepen.io/${codepen}`}
          size="50"
        />
        <SocialMediaIconsReact
          borderColor="rgba(0,0,0,0.25)"
          borderWidth="5"
          borderStyle="solid"
          icon="linkedin"
          iconColor="rgba(255,255,255,1)"
          iconSize="5"
          roundness="50%"
          url={`https://www.linkedin.com/in/${linkedin}`}
          size="50"
        />
      </SocialContainer>
      <FooterAuthor>© 2019</FooterAuthor>
    </FooterContainer>
  )
}

export default Footer
