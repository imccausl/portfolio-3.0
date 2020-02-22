import React, { useState } from "react"
import styled from "@emotion/styled"

import Overlay from "components/_ui/Overlay"
import ViewReadme from "components/_ui/ViewReadme"

const LinkButton = styled("button")`
  cursor: pointer;
  font-size: 1em;
  border: 0;
  outline: none;
  background: transparent;
  color: #3a67b2;
  padding: 0;
`

export default ({
  title,
  description,
  thumbnail,
  updated_at,
  repo,
  website,
}) => {
  const [modalVisible, setModalVisible] = useState(false)
  console.log(modalVisible)

  return (
    <>
      <Overlay
        visible={modalVisible}
        toggleVisible={() => setModalVisible(false)}
      >
        <ViewReadme
          title={title}
          description={description}
          thumbnail={thumbnail}
          updated_at={updated_at}
          repo={repo}
          website={website}
          visible={modalVisible}
        />
      </Overlay>
      <LinkButton onClick={() => setModalVisible(true)}>Read More</LinkButton>
    </>
  )
}
