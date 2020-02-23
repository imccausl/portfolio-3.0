import React from "react"
import { SocialMediaIconsReact } from "social-media-icons-react"
import styled from "@emotion/styled"

const SocialContainer = styled("div")`
  display: flex;
  flex-direction: ${props => props.direction};
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 10px;

  .icon {
    ${props => (props.direction === "row" ? "margin-right: 10px;" : "")}
  }

  .icon:first-of-type {
    ${props => (props.direction === "row" ? "margin-right: 0" : "")}
  }
`

const makeSocialLinks = (data, direction) => {
  const urlMap = {
    github: { url: "https://www.github.com/", order: 1 },
    codepen: { url: "https://www.codepen.io/", order: 2 },
    twitter: { url: "https://www.twitter.com/", order: 4 },
    linkedin: { url: "https://www.linkedin.com/in/", order: 3 },
  }

  return Object.keys(data).map(social => {
    return (
      <div className="icon" style={{ order: urlMap[social].order }}>
        <SocialMediaIconsReact
          key={`${social}-${data[social]}`}
          icon={`${social}`}
          iconColor="rgba(255,255,255,1)"
          iconSize="3"
          roundness="50%"
          url={`${urlMap[social].url}${data[social]}`}
          size={direction === "row" ? "50" : "35"}
        />
      </div>
    )
  })
}

export default ({ socialUsernames, direction }) => {
  const flowDirection = direction ? direction : "row"

  return (
    <SocialContainer direction={flowDirection}>
      {makeSocialLinks(socialUsernames, flowDirection)}
    </SocialContainer>
  )
}
