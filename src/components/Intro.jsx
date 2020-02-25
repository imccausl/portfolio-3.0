import React from "react"
import styled from "@emotion/styled"

const IntroHeaderStyle = styled("div")`
  font-size: 4.7em;
  font-weight: 800;
  line-height: 1.3;
`

const IntroDescription = styled("div")`
  font-size: 1.5em;
  font-weight: 800;
  margin-top: 2em;
  max-width: 75%;
`

const IntroContainer = styled("div")`
  margin: 4em 0 0 0;
`

export default props => {
  const { name, description } = props
  return (
    <IntroContainer>
      <IntroHeaderStyle>I&rsquo;m {name}</IntroHeaderStyle>
      <IntroHeaderStyle>
        and I am{" "}
        <span style={{ color: "orangered" }}>
          a full stack developer from Toronto
        </span>
        .
      </IntroHeaderStyle>
      <IntroDescription>{description}</IntroDescription>
    </IntroContainer>
  )
}
