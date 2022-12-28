module TweetsHelper
  require 'action_view/helpers'

  def short_time(tweet)
    time_ago_in_words(tweet.created_at, scope: 'datetime.distance_in_words.short').gsub("and", "").gsub(',', '')
  end
end
