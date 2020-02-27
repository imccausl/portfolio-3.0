import React from "react"
import { Placeholder } from "../common"

function prettifyRepoName(name) {
  const nameArray = name.split("-")
  const titleCase = nameArray.map(
    word => `${word.substring(0, 1).toUpperCase()}${word.substring(1)}`
  )

  return titleCase.join(" ")
}

class ListRepositories extends React.Component {
  state = {
    loading: true,
    error: false,
    portfolioData: [],
  }

  componentDidMount() {
    fetch(
      "https://api.github.com/search/repositories?q=topic:portfolio+user:imccausl&sort=created"
    ).then(response =>
      response.json().then(json => {
        const data = this.parseGithubData(json)
        console.log(json)
        this.setState({ loading: false, portfolioData: data })
      })
    )
  }

  parseGithubData(data) {
    const parsedData = data.items.map(project => {
      const {
        name,
        html_url,
        description,
        created_at,
        updated_at,
        homepage,
        node_id,
      } = project
      const newObj = {
        name: prettifyRepoName(name),
        repoName: name,
        html_url,
        thumbnail: `https://raw.githubusercontent.com/imccausl/${name}/master/screenshot.gif`,
        description,
        created_at,
        updated_at,
        homepage,
        node_id,
      }

      return newObj
    })

    return parsedData
  }
  render() {
    const { portfolioData, loading, error } = this.state

    // if (loading) {
    //   return <Placeholder loading={loading} />
    // }

    if (!loading && error) {
      return <div>Error!</div>
    }

    return (
      <Placeholder loading={!loading}>
        {portfolioData.map(node => {
          return this.props.render(node)
        })}
      </Placeholder>
    )
  }
}

export default ListRepositories
