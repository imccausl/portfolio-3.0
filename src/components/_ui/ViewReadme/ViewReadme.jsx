import React from "react"
import styled from "@emotion/styled"
import { useSpring, animated } from "react-spring"

const ViewContainer = styled(animated.div)`
  background: white;
  z-index: 1001;
  width: 60%;
  height: 80%;
`

export default props => {
  const { visible } = props
  const { x } = useSpring({
    from: { x: 0 },
    x: visible ? 1 : 0,
    config: { duration: 500 },
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
    ></ViewContainer>
  )
}
