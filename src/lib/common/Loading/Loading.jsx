import React from "react"
import { PropagateLoader } from "react-spinners"

const Loading = () => (
  <header style={{ width: "100%" }}>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "300px",
        width: "100%",
      }}
    >
      <PropagateLoader />
    </div>
  </header>
)

export default Loading
