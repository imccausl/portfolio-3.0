import React from "react"
import Button from "components/_ui/Button"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import { RichText } from "prismic-reactjs"
import PropTypes from "prop-types"

import {
  AboutActions,
  AboutBio,
  AboutLink,
  AboutLinkContainer,
  AboutContainer,
} from "./About.styles"

const About = ({ bio, socialLinks }) => (
  <AboutContainer>
    <AboutLinkContainer>
      {socialLinks.map((social, i) => (
        <AboutLink key={i} href="" target="_blank" rel="noopener noreferrer">
          {social.about_link[0].text}
          <span>&#8594;</span>
        </AboutLink>
      ))}
    </AboutLinkContainer>
    <AboutBio>{RichText.render(bio)}</AboutBio>
    <AboutActions>
      <a
        href="mailto:marguerite.roth@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="Button--secondary">Email me</Button>
      </a>
    </AboutActions>
  </AboutContainer>
)

export default About

About.propTypes = {
  bio: PropTypes.array.isRequired,
  socialLinks: PropTypes.array.isRequired,
}
