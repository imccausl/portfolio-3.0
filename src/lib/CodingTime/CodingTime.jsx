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
        this.setState({
          loadingLanguages: false,
          languages: this.replaceLanguages(this.filterLanguages(data)),
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

  replaceLanguages(data) {
    const extensions = Object.keys(wakaTime.mapExtensionToLanguage)
    if (extensions && extensions.length) {
      return data.map(language => {
        if (extensions.includes(language.name)) {
          return {
            name: wakaTime.mapExtensionToLanguage[language.name],
            percent: language.percent,
          }
        }

        return language
      })
    }
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

    if (loadingLanguages || loadingTimeData) {
      return <Loading />
    }

    return this.props.render({ error, languages, codingTime })
  }
}

export default CodingTime
