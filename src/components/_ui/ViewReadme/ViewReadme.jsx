import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import { useSpring, animated } from "react-spring"
import marked from "marked"
import sanitizeHtml from "sanitize-html"

import ProjectCard, { ActionButtons } from "../../ProjectCard"

const ViewContainer = styled(animated.div)`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 10px 20px;
  z-index: 1001;
  width: 70%;
  max-height: 90%;

  border-radius: 5px;
  overflow-y: hidden;

  div {
    margin-bottom: 5px;
  }
`

// configure marked to parse github flavoured markdown
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
})

const ReadMeContainer = styled("div")`
  overflow-y: scroll;

  h1 {
    font-size: 1.6em;
  }

  h2 {
    font-size: 1.3em;
  }

  h3 {
    font-size: 1.1em;
  }

  h4 {
    font-size: 0.8em;
  }

  h1,
  h2,
  h3,
  h4,
  p {
    margin: 8px 0 15px 0;
  }

  p {
    line-height: 1.5;
  }
`

const ActionButtonContainer = styled("div")`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
`

const ReadMe = props => {
  const { repoName } = props
  const [data, setData] = useState({
    loading: true,
    error: false,
    payload: "",
  })

  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/imccausl/${repoName}/master/README.md`
    ).then(response =>
      response.text().then(data => {
        console.log(data)
        setData({ loading: false, payload: data, error: false })
      })
    )
  }, [])

  const renderMarkdown = data => {
    const cleaned = sanitizeHtml(data)

    return { __html: marked(cleaned) }
  }

  const { loading, error, payload } = data

  return (
    !loading &&
    !error && (
      <ReadMeContainer
        dangerouslySetInnerHTML={renderMarkdown(payload)}
      ></ReadMeContainer>
    )
  )
}

export default props => {
  const {
    visible,
    title,
    repoName,
    description,
    thumbnail,
    updated_at,
    repo,
    website,
  } = props

  const { x } = useSpring({
    from: { x: 0 },
    x: visible ? 1 : 0,
    config: { duration: 400 },
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
    >
      <ProjectCard
        title={title}
        description={description}
        thumbnail={thumbnail}
        updated_at={updated_at}
        repo={repo}
        website={website}
        hideReadMoreButton={true}
        hideActionButtons={true}
      />
      <ReadMe repoName={repoName} />
      <ActionButtons repo={repo} website={website} />
    </ViewContainer>
  )
}
