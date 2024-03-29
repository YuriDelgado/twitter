import React from "react"

import { RetweetIcon, CommentIcon, LikeIcon } from "../icons"

function Tweet({ tweet, setTweets }) {
  function handleRetweet(id) {
    const csrfToken = document.querySelector("[name='csrf-token']").content
    const data = { tweet_id: id }

    fetch("/retweets", {
      method: "POST",
      headers: {
        "X-CSRF-Token": csrfToken,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(response => {
        console.log("retweet: ", response.tweet)
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

  function handleLike(id) {
    const csrfToken = document.querySelector("[name='csrf-token']").content
    const data = { tweet_id: id }

    fetch("/tweet_likes", {
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
          fetch("/tweets.json")
            .then(response => response.json())
            .then(data => {
              setTweets(data)
            })
        } else {
          console.log(`Server error: ${response}`)
        }
      })
      .catch(error => {
        console.log(`Network error: ${error}`)
      })
  }
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
          <div className="inline-flex space-x-1">
            <button onClick={() => handleLike(tweet.id)}><LikeIcon /></button>
            <div className="text-xs">{tweet.likes_count}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tweet
