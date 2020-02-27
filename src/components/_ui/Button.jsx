import React, { Component } from "react"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"

const ButtonContainer = styled("button")`
  display: inline-block;
  width: 100%;
  padding: 1em 2em;
  background: ${colors.blue400};
  font-weight: 600;
  color: #5393fe;
  outline: none;
  border: 1px solid #5393fe;
  font-size: 1rem;
  position: relative;
  transition: background 100ms ease-in-out;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    font-size: 1em;
  }

  p {
    margin: 0;
  }

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      ${colors.pink400} 0%,
      ${colors.purple400} 100%
    );
    z-index: -1;
  }

  &:hover {
    cursor: not-allowed;
    background: transparent;
    transition: background 100ms ease-in-out;
  }

  &.Button--secondary {
    background: ${colors.blue200};
    color: ${colors.blue600};
    padding: 0.5em 1.8em;
    font-size: 0.95rem;

    &:hover:enabled {
      cursor: pointer;
      background: ${colors.blue300};
      transition: background 100ms ease-in-out;
    }
  }
`

const ButtonContent = styled("div")`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

class Button extends Component {
  render() {
    const { children, ...props } = this.props
    return (
      <ButtonContainer onClick={this.props.onClick} {...props}>
        <ButtonContent>{this.props.children}</ButtonContent>
      </ButtonContainer>
    )
  }
}

export default Button
