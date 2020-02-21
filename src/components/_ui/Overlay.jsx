import React from "react"
import { useTransition, animated } from "react-spring"
import styled from "@emotion/styled"

const OverlayContainer = styled(animated.div)`
  position: fixed;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;

  z-index: 1000;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
`

export default props => {
  const { visible, toggleVisible } = props
  const transitions = useTransition(visible, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })
  // prevent scrolling under the overlay
  document.body.style.overflow = visible ? "hidden" : "scroll"

  return transitions.map(
    config =>
      config.item && (
        <OverlayContainer
          style={config.props}
          key={config.key}
          onClick={toggleVisible}
          visible={visible}
        >
          {props.children}
        </OverlayContainer>
      )
  )
}
