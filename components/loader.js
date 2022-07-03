import * as React from "react"

function Loader(props) {
  return (
    <svg
      style={{
        margin: "auto",
        background: "0 0"
      }}
      width="100vw"
      height="100vh"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      display="block"
      {...props}
    >
      <circle cx={30} cy={50} fill="#e76a24" r={5}>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1.5384615384615383s"
          keyTimes="0;0.5;1"
          values="30;70;30"
          begin="-0.7692307692307692s"
        />
      </circle>
      <circle cx={70} cy={50} fill="#fbbc42" r={5}>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1.5384615384615383s"
          keyTimes="0;0.5;1"
          values="30;70;30"
          begin="0s"
        />
      </circle>
      <circle cx={30} cy={50} fill="#e76a24" r={5}>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1.5384615384615383s"
          keyTimes="0;0.5;1"
          values="30;70;30"
          begin="-0.7692307692307692s"
        />
        <animate
          attributeName="fill-opacity"
          values="0;0;1;1"
          calcMode="discrete"
          keyTimes="0;0.499;0.5;1"
          dur="1.5384615384615383s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  )
}

export default Loader
