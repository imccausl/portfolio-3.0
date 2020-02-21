import React from "react"
import { useSpring, animated } from "react-spring"
import styled from "@emotion/styled"

const OverlayContainer = styled(animated.div)`
  position: fixed;

  pointer-events: none;
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
`

export default props => {
  const { visible, toggleVisible } = props
  const fadeStyle = useSpring({ o: visible ? 0.5 : 0 })
  // prevent scrolling under the overlay
  document.body.style.overflow = visible ? "hidden" : "scroll"

  return (
    <OverlayContainer
      style={{
        backgroundColor: fadeStyle.o.interpolate(o => `rgba(0,0,0, ${o})`),
        pointerEvents: visible ? "auto" : "none",
      }}
      onClick={toggleVisible}
      visible={visible}
    >
      {props.children}
    </OverlayContainer>
  )
}
