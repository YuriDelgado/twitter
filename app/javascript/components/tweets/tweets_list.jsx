import React, { useState } from "react"

import Tweet from "./tweet"
import { RetweetIcon } from "../icons"

function TweetsList({ tweets, setTweets }) {
  const emptyState = (<div>Nothing to see here!</div>)
  const [error, setError] = useState("")

  function retweet(tweet){
    return(tweet.type == "retweet")
  }

  const dataSection = tweets.map((data, index) =>
    <div key={index} className="w-full p-4 border-b hover:bg-neutral-50">
      { retweet(data) ? (
        <div className="inline-flex text-xs text-slate-400 space-x-2 ml-2">
          <RetweetIcon />
          <b>{data.author}</b>
          <div>Retweeted</div>
        </div>
      ) : "" }
      <Tweet tweet={retweet(data) ? data.source_tweet : data} setTweets={setTweets} />
    </div>
  )

  return(!!tweets.length ? dataSection : emptyState)
}

export default TweetsList
