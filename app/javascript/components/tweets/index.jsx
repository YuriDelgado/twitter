import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom/client"

import NewTweet from "./new_tweet"
import TweetsList from "./tweets_list"

const tweetsElement = document.getElementById("tweets")
if (tweetsElement) {
  const tweets = ReactDOM.createRoot(tweetsElement)

  tweets.render(<><App /></>)
}

function App() {
  const [tweets, setTweets] = useState([])

  useEffect(() => {
    fetch("/tweets.json")
      .then(response => response.json())
      .then(data => {
        setTweets(data)
      })
  }, [])

  return(
    <div className="flex flex-col items-center w-full mx-auto bg-white border-t">
      <NewTweet setTweets={setTweets} />
      <TweetsList tweets={tweets} setTweets={setTweets}/>
    </div>
  )
}
