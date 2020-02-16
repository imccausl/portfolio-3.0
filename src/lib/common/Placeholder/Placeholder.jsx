import "react-placeholder/lib/reactPlaceholder.css"

import React from "react"
import ReactPlaceholder from "react-placeholder"
import {
  TextBlock,
  RectShape,
  TextRow,
} from "react-placeholder/lib/placeholders"

const placeholderStyles = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  alignItems: "center",
  justifyContent: "space-between",
}
const placeholderItem = (
  <div style={placeholderStyles}>
    <TextBlock rows={7} color="lightgrey" style={{ marginRight: "20px" }} />
    <RectShape color="lightgrey" style={{ width: 411, height: 255 }} />
  </div>
)

const placeholder = num => {
  const placeholders = []

  for (let i = 0; i < num; i++) {
    placeholders.push(placeholderItem)
  }

  return placeholders
}

const PlaceholderLoader = props => (
  <ReactPlaceholder
    ready={props.loading}
    showLoadingAnimation={true}
    customPlaceholder={placeholder(3)}
  >
    {props.children}
  </ReactPlaceholder>
)

export default PlaceholderLoader
