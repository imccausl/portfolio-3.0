import React from "react"
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
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
})

const ReadMeContainer = styled("div")`
  overflow-y: scroll;
`

class ReadMe extends React.Component {
  state = {
    loading: true,
    error: false,
    data: "",
  }

  componentDidMount() {
    fetch(
      `https://raw.githubusercontent.com/imccausl/tip-distribute/master/README.md`
    ).then(response =>
      response.text().then(data => {
        console.log(data)
        this.setState({ loading: false, data })
      })
    )
  }

  renderMarkdown(data) {
    return { __html: marked(data) }
  }

  render() {
    const { loading, error, data } = this.state

    return (
      !loading &&
      !error && (
        <ReadMeContainer
          dangerouslySetInnerHTML={this.renderMarkdown(data)}
        ></ReadMeContainer>
      )
    )
  }
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
      <ReadMe repo_name={repo_name} />
    </ViewContainer>
  )
}
