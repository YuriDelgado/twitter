import React, { useState, useEffect } from "react"

function NewTweet({ setTweets }) {
  const [tweet, setTweet] = useState("")
  const [loading, setLoading] = useState("")
  const [error, setError] = useState("")


  const handleSubmit = async () =>  {
    const csrfToken = document.querySelector("[name='csrf-token']").content
    const data = { tweet: { body: tweet } }
    setLoading(true)

    fetch("/tweets", {
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
          setError(`Server error: ${response}`)
        }
        setLoading(false)
      })
      .catch(error => {
        setError(`Network error: ${error}`)
      })
  }

  return(
    <div className="w-full p-4 border-b">
      <div>
        <input type="text" name="tweet" onChange={(e) => setTweet(e.target.value)} className="border-b border-t-0 border-x-0 mb-6 px-6 pt-6 block w-full border-gray-200 focus:shadow-none focus:outline-none focus:ring-transparent focus:border-gray-300 resize-none min-b-[180px] text-lg" placeholder="What's happening?" />
        <div className="flex justify-end w-full px-6 mt-20">
        <button name="submit" onClick={handleSubmit} className="px-6 py-2 bg-sky-400 text-white font-semibold rounded-full text-centercursor-pointer inline-block hover:bg-sky-500 transition easy-in-out duration-300">Tweet</button>
        </div>
      </div>
    </div>
  )
}

export default NewTweet
