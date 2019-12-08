import React from "react"
import fetchJsonp from "fetch-jsonp"
import { wakaTime } from "./config"
import { Loading } from "../common"

class CodingTime extends React.Component {
  state = {
    loadingLanguages: true,
    loadingTimeData: true,
    error: false,
    languages: [],
    codingTime: [],
  }

  componentDidMount() {
    fetchJsonp(wakaTime.languageLink).then(response =>
      response.json().then(data => {
        console.log(data)
        this.setState({
          loadingLanguages: false,
          languages: this.filterLanguages(data),
        })
      })
    )

    fetchJsonp(wakaTime.codingTimeLink).then(response =>
      response.json().then(data => {
        this.setState({
          loadingTimeData: false,
          codingTime: this.parseTime(data),
        })
      })
    )
  }

  filterLanguages(data) {
    if (!Array.isArray(wakaTime.ignoreLanguages)) {
      wakaTime.ignoreLanguages = []
    }

    return data.data.filter(item => {
      if (!wakaTime.ignoreLanguages.includes(item.name.toLowerCase())) {
        return item
      }
    })
  }

  parseTime(response) {
    function getTotalTime(data) {
      return data
        .map(time => time.grand_total.total_seconds)
        .reduce((acc, curr) => acc + curr, 0)
    }

    const totalSeconds = getTotalTime(response.data)
    const hours = Math.floor(totalSeconds / 60 / 60)
    const minutes = Math.floor(totalSeconds / 60 - hours * 60)

    return { hours, minutes }
  }

  render() {
    const {
      languages,
      codingTime,
      loadingLanguages,
      loadingTimeData,
      error,
    } = this.state

    console.log(1, loadingLanguages, loadingTimeData)
    if (loadingLanguages || loadingTimeData) {
      return <Loading />
    }

    return this.props.render({ error, languages, codingTime })
  }
}

export default CodingTime
