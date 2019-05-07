import * as React from "react";
import "./index.css"

export default class NavLeft extends React.Component {

  componentWillMount() {
  }

  render() {
    return (
      <>
        <div className="logo">
          {/* <img src="/assets/logo-ant.svg" alt=""/> */}
          <h1>AntD MS</h1>
        </div>
      </>
    )
  }
}