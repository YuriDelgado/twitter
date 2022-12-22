import React from "react"
import ReactDom from "react-dom/client"

class Tweets extends React.Component {
  render() {
    return(
      <div>Tweets on react!</div>
    )
  }
}

const tweets = ReactDom.createRoot(document.getElementById("tweets"))
tweets.render(<Tweets />)
