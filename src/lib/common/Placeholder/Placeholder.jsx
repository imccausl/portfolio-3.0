import "react-placeholder/lib/reactPlaceholder.css"

import React from "react"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import ReactPlaceholder from "react-placeholder"
import {
  TextBlock,
  RectShape,
  TextRow,
} from "react-placeholder/lib/placeholders"

const ProjectCardContent = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  background: white;
  width: 100%;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-row: 1;
    margin-bottom: 20px;
  }
`

const placeholderStyles = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "20px",
  width: "100%",
}
const MakePlaceholderItem = index => (
  <div key={`placeholder-item-${index}`} style={placeholderStyles}>
    <TextBlock rows={7} color="lightgrey" style={{ marginRight: "20px" }} />
    <RectShape color="lightgrey" style={{ width: 411, height: 255 }} />
  </div>
)

const placeholder = num => {
  const placeholders = []

  for (let i = 0; i < num; i++) {
    placeholders.push(MakePlaceholderItem(i + 1))
  }

  return placeholders
}

const PlaceholderLoader = props => (
  <ProjectCardContent>
    <ReactPlaceholder
      ready={props.loading}
      showLoadingAnimation={true}
      customPlaceholder={placeholder(3)}
    >
      {props.children}
    </ReactPlaceholder>
  </ProjectCardContent>
)

export default PlaceholderLoader
