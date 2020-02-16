import React from "react"
import { colors } from "./config"

const makeLanguageList = languages => {
  return languages.map((lang, index) => {
    const colorIndex = Math.floor(Math.random() * colors.length)

    return (
      <span key={`${lang.percent}-${lang.name}`}>
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              background: "#F4F4F4",
              padding: "5px 10px",
              border: "1px solid #dfdfdf",
            }}
          >
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
