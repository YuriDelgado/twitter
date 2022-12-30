class Tweet < ApplicationRecord
  DEFAULT_SHORT_TIME = "< 1m"

  belongs_to :user
  belongs_to :tweet, counter_cache: true, optional: true
  has_many :retweets, class_name: "Tweet", foreign_key: "tweet_id"

  scope :ordered, -> { order(created_at: :desc) }

  def _type
    return "tweet" unless tweet_id?

    "retweet"
  end

  def json_response
    {
      body: body,
      short_time: DEFAULT_SHORT_TIME,
      author: user.username,
      email: user.email,
      tweet_id: tweet_id,
      type: _type,
      tweets_count: tweets_count,
      source_tweet: tweet&.json_response
    }
  end
end
