import React, { useState } from "react"
import styled from "@emotion/styled"
import { IoMdArrowForward } from "react-icons/io"

import Overlay from "components/_ui/Overlay"
import ViewReadme from "components/_ui/ViewReadme"

const LinkButton = styled("button")`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;

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
  repoName,
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
          repoName={repoName}
          description={description}
          thumbnail={thumbnail}
          updated_at={updated_at}
          repo={repo}
          website={website}
          visible={modalVisible}
        />
      </Overlay>
      <LinkButton onClick={() => setModalVisible(true)}>
        <div style={{ marginRight: "5px" }}>Read More</div> <IoMdArrowForward />
      </LinkButton>
    </>
  )
}
