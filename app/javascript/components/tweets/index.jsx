import React from "react"
import ReactDom from "react-dom/client"

class Tweets extends React.Component {
  render() {
    return(
      <div>
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
          <div className="shrink-0">
          </div>
          <div>
            <div className="text-3xl font-medium text-orange-400 italic">ChitChat</div>
            <p className="font-bold text-2xl text-slate-100">You have a new message!</p>
          </div>
        </div>
      </div>
    )
  }
}

const tweetsElement = document.getElementById("tweets")
if (tweetsElement) {
  const tweets = ReactDom.createRoot(tweetsElement)
  tweets.render(<Tweets />)
}
