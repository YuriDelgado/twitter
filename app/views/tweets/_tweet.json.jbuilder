json.extract! tweet, :id, :body
json.short_time short_time(tweet)
json.author tweet.user.username
json.email tweet.user.email
json.type tweet._type
json.source_tweet tweet.tweet&.json_response
