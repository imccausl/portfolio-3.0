import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"

const NavMenuItem = styled(Link)`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  visibility: ${props => (props.open ? "visible" : "hidden")};

  color: black;
  box-shadow: ${props =>
    props.open ? "0 4px 20px 0 rgba(0, 0, 0, 0.1)" : "0"};
  border: 5px solid #f5f8ff;
  text-decoration: none;
  transform: scale(80%);
  background-color: #edf3ff;
  border-radius: 50%;
  font-size: 2em;
  width: 75px;
  height: 75px;
  transition: all 0.5s ease-in-out;

  &:hover {
    border: 5px solid ${colors.blue700};
  }

  &:focus {
    color: rgb(58, 103, 178);
    transform: scale(105%);
    outline: 0;
    border: 5px solid orange;
  }
`

const NavMenuTooltip = styled("div")`
  opacity: ${props => (props.show ? "1" : "0")};
  color: rgb(58, 103, 178);
  background-color: #edf3ff;
  text-decoration: none;
  transition: opacity 0.3s ease-in-out;

  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  font-size: 0.8em;
  font-weight: 800;

  padding: 4px 10px;
  margin-right: 15px;
  border-radius: 2em;
  border: 5px solid orange;
`

export default props => {
  const { icon, open, name, to, closeCallback } = props
  const itemId = `menu-item-${name}`
  const [showTooltip, setShowTooltip] = useState(false)

  function handleShowTooltip(item) {
    setShowTooltip(true)
  }

  function handleHideTooltip(item) {
    setShowTooltip(false)
  }

  return (
    <>
      <NavMenuItem
        aria-labelled-by={itemId}
        onClick={closeCallback}
        open={open}
        onMouseEnter={handleShowTooltip}
        onMouseLeave={handleHideTooltip}
        onBlur={handleHideTooltip}
        onFocus={handleShowTooltip}
        to={to}
      >
        {icon}
      </NavMenuItem>
      <NavMenuTooltip
        navMenuOpen={open}
        id={itemId}
        aria-hidden={!showTooltip}
        show={showTooltip && open}
      >
        {name}
      </NavMenuTooltip>
    </>
  )
}
