import React from "react"
import { useSpring, animated } from "react-spring"

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
  const coding = useSpring({
    minutes: codingTime.minutes,
    hours: codingTime.hours,
    from: { minutes: 0, hours: 0 },
  })
  console.log(coding.minutes)
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
              fontSize: "3.2em",
              lineHeight: "1.4",
              fontWeight: "800",
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
              <animated.span style={{ color: "orangered" }}>
                {coding.hours.interpolate(x => x.toFixed(0))}
              </animated.span>
              <span style={{ color: "orangered" }}>
                {` ${codingTime.hours === 1 ? "hour" : "hours"}`}
              </span>{" "}
              and{" "}
              <animated.span style={{ color: "orangered" }}>
                {coding.minutes.interpolate(x => x.toFixed(0))}
              </animated.span>
              <span style={{ color: "orangered" }}>
                {" "}
                {codingTime.minutes === 1 ? "minute" : "minutes"}
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
