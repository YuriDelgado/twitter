import React from "react"

import { RetweetIcon, CommentIcon, LikeIcon } from "../icons"

function Tweet({ tweet, setTweets }) {
  function handleRetweet(id) {
    const csrfToken = document.querySelector("[name='csrf-token']").content
    const data = { id: id }

    fetch("/retweet", {
      method: "POST",
      headers: {
        "X-CSRF-Token": csrfToken,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(response => {
        if(response.tweet) {
          setTweets(oldList => [response.tweet, ...oldList])
        } else {
          console.log(`Server error: ${response}`)
        }
      })
      .catch(error => {
        console.log(`Network error: ${error}`)
      })
  }
  console.log(tweet)
  return(
    <div>
      <div className="inline-flex items-baseline">
        <div className="p-2 text-sm font-bold">{tweet.author}</div>
        <div className="text-xs">{tweet.email} &middot; {tweet.short_time}</div>
      </div>
      <div>
        <div className="text-3xl font-medium text-orange-400 italic">{tweet.body}</div>
        <div className="flex inline-flex p-2 space-x-4">
          <CommentIcon />
          <div className="inline-flex space-x-1">
            <button onClick={() => handleRetweet(tweet.id)}><RetweetIcon /></button>
            <div className="text-xs">{tweet.tweets_count}</div>
          </div>
          <LikeIcon />
        </div>
      </div>
    </div>
  )
}

export default Tweet
