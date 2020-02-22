import React from "react"
import styled from "@emotion/styled"
import { useSpring, animated } from "react-spring"

import ProjectCard from "../../ProjectCard"

const ViewContainer = styled(animated.div)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: white;
  padding: 20px;
  z-index: 1001;
  width: 70%;
  height: 90%;
`

export default props => {
  const {
    visible,
    title,
    description,
    thumbnail,
    updated_at,
    repo,
    website,
  } = props

  const { x } = useSpring({
    from: { x: 0 },
    x: visible ? 1 : 0,
    config: { duration: 400 },
  })

  return (
    <ViewContainer
      style={{
        transform: x
          .interpolate({
            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
            output: [0, 0.5, 0.9, 1],
          })
          .interpolate(x => `scale(${x})`),
      }}
    >
      <ProjectCard
        title={title}
        description={description}
        thumbnail={thumbnail}
        updated_at={updated_at}
        repo={repo}
        website={website}
        hideReadMoreButton={true}
      />
    </ViewContainer>
  )
}
