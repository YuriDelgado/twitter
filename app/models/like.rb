class Like < ApplicationRecord
  belongs_to :tweet, counter_cache: true
  belongs_to :user

  validates_uniqueness_of :user_id, scope: :tweet_id
end
