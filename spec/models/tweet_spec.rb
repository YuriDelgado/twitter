require 'rails_helper'

RSpec.describe Tweet, type: :model do
  describe "Database columns" do
    it { is_expected.to have_db_column(:body).of_type(:text) }
    it { is_expected.to have_db_column(:tweets_count).of_type(:integer) }
    it { is_expected.to have_db_column(:likes_count).of_type(:integer) }
  end

  describe "Associations" do
    it { is_expected.to belong_to(:user) }
    it { is_expected.to belong_to(:tweet).optional(true) }
    it { is_expected.to have_many(:retweets).class_name("Tweet") }
    it { is_expected.to have_many(:likes) }
  end

  describe "tweets count" do
    let(:tweet) { create(:tweet) }

    it "can create user with tweets" do
      create(:tweet, tweet: tweet, body: nil)

      expect(tweet.tweets_count).to eq(tweet.retweets.size)
    end
  end

  describe "likes count" do
    let(:tweet) { create(:tweet) }
    let(:user) { create(:user) }

    it "can create user with tweets" do
      user.likes.create(tweet: tweet)

      expect(tweet.likes_count).to eq(tweet.likes.size)
    end
  end
end
