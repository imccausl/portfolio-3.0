import React from "react"
import { colors } from "./config"

const makeLanguageList = languages => {
  return languages.map((lang, index) => {
    const colorIndex = Math.floor(Math.random() * colors.length)

    return (
      <span>
        <span style={{ color: colors[colorIndex] }}>{lang.name}</span>
        {`${
          index === languages.length - 2
            ? " and "
            : index !== languages.length - 1
            ? ", "
            : ""
        }`}
      </span>
    )
  })
}

const DefaultView = ({ error, languages, codingTime }) => {
  return (
    <>
      <header>
        <div>
          <h2>
            <span>
              In the last <span style={{ color: "orangered" }}>7 days</span> I
              have worked with{" "}
            </span>
            {!error && makeLanguageList(languages)}
            <span>
              {" "}
              for a total of{" "}
              <span style={{ color: "orangered" }}>
                {" "}
                {`${codingTime.hours} ${
                  codingTime.hours === 1 ? "hour" : "hours"
                }`}
              </span>{" "}
              and{" "}
              <span style={{ color: "orangered" }}>
                {" "}
                {`${codingTime.minutes} ${
                  codingTime.minutes === 1 ? "minute" : "minutes"
                }`}
              </span>
              .
            </span>
          </h2>
        </div>
      </header>
    </>
  )
}

export default DefaultView
