class AddTweetsCountToTweets < ActiveRecord::Migration[7.0]
  def change
    add_column :tweets, :tweets_count, :integer
  end
end
