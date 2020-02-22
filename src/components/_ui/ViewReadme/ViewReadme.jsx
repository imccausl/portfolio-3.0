import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import { useSpring, animated } from "react-spring"
import marked from "marked"
import sanitizeHtml from "sanitize-html"

import ProjectCard from "../../ProjectCard"

const ViewContainer = styled(animated.div)`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 20px;
  z-index: 1001;
  width: 70%;
  height: 90%;

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
  border-top: 1px solid #c4c4c4;
  overflow-y: scroll;
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
      />
      <ReadMe repoName={repoName} />
    </ViewContainer>
  )
}
