import React from "react"
import ReactDom from "react-dom/client"

class Tweets extends React.Component {
  render() {
    return(
      <div>Tweets on react!</div>
    )
  }
}

const tweetsElement = document.getElementById("tweets")
if (tweetsElement) {
  const tweets = ReactDom.createRoot(tweetsElement)
  tweets.render(<Tweets />)
}
