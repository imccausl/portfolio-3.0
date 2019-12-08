import React from "react"
import { PropagateLoader } from "react-spinners"

const Loading = () => (
  <header>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "300px",
      }}
    >
      <h2>
        <PropagateLoader />
      </h2>
    </div>
  </header>
)

export default Loading
