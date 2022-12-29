json.extract! tweet, :id, :body, :updated_at 
json.short_time short_time(tweet)
json.author tweet.user.username
json.url tweet_url(tweet, format: :json)
