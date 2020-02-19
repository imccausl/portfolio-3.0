import React from "react"
import styled from "@emotion/styled"

const OverlayContainer = styled("div")`
  display: ${props => (props.visible ? "block" : "none")};
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
`

export default props => {
  const { visible, toggleVisible } = props

  document.body.style.overflow = visible ? "hidden" : "scroll"
  return (
    <OverlayContainer onClick={toggleVisible} visible={visible}>
      {props.children}
    </OverlayContainer>
  )
}
