json.extract! tweet, :id, :tweet, :created_at, :updated_at 
json.author tweet.user.username
json.url tweet_url(tweet, format: :json)
