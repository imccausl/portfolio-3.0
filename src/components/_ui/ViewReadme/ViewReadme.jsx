import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import { useSpring, animated } from "react-spring"
import marked from "marked"

import ProjectCard from "../../ProjectCard"

const ViewContainer = styled(animated.div)`
  background: white;
  padding: 20px;
  z-index: 1001;
  width: 70%;
  height: 90%;
  overflow-y: scroll;
`

// configure marked to parse github flavoured markdown
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
})

const ReadMeContainer = styled("div")`
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
  })

  const renderMarkdown = data => {
    return { __html: marked(data) }
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
    repo_name,
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
      <ReadMe repoName={repo_name} />
    </ViewContainer>
  )
}
