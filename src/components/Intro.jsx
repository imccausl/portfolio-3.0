import React from "react"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"

const IntroHeaderStyle = styled("div")`
  font-size: 4.7em;
  font-weight: 800;
  line-height: 1.3;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    font-size: 4.2em;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    font-size: 3em;
  }
`

const IntroDescription = styled("div")`
  font-size: 1.5em;
  font-weight: 600;
  margin-top: 2em;
  max-width: 75%;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    font-size: 1.2em;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    font-size: 1em;
  }
`

const IntroContainer = styled("div")`
  margin: 4em 0;
`

export default props => {
  const { name, description } = props
  return (
    <IntroContainer>
      <IntroHeaderStyle>I&rsquo;m {name}</IntroHeaderStyle>
      <IntroHeaderStyle>
        and I am{" "}
        <span style={{ backgroundColor: "#F43F3F", color: "white" }}>
          a full stack developer
        </span>{" "}
        from Toronto.
      </IntroHeaderStyle>
      <IntroDescription>
        <span style={{ color: "white", backgroundColor: "#f46b3f" }}>
          {description}
        </span>
      </IntroDescription>
    </IntroContainer>
  )
}
