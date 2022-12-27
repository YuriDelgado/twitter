import React, {useState, useEffect} from "react"
import ReactDom from "react-dom/client"

function Tweets() {

  const [loading, setLoading] = useState(true)
  const [tweetsList, setTweetsList] = useState([])

  useEffect(() => {
    fetch("/tweets.json")
      .then(response => response.json())
      .then(data => {
        setTweetsList(data)
        setLoading(false)
      })
  }, [])

  const loadingSection = (<div>Loading...</div>)
  const dataSection = tweetsList.map((tweet, index) =>
    <div key={index} className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <div className="shrink-0">
      </div>
      <div>
        <div className="text-3xl font-medium text-orange-400 italic">{tweet.tweet}</div>
        <p className="font-bold text-2xl text-slate-100">{tweet.created_at}</p>
        <p className="font-bold text-2xl text-slate-100">{tweet.author}</p>
      </div>
    </div>
  )

  if (loading) {
    return loadingSection
  } else {
    return dataSection
  }
}

const tweetsElement = document.getElementById("tweets")
if (tweetsElement) {
  const tweets = ReactDom.createRoot(tweetsElement)
  tweets.render(
    <div>
      <div key="head" className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          <img className="h-12 w-12" src="#" />
        </div>
        <div className="text-xl font-medium text-black">Tweet</div>
        <p className="text-slate-500">Published</p>
        <p className="text-slate-500">Author</p>
      </div>
      <Tweets />
    </div>
  )
}
