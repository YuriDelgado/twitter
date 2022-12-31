require 'rails_helper'

RSpec.describe User, type: :model do
  describe "Database columns" do
    it { is_expected.to have_db_column(:email).of_type(:string) }
    it { is_expected.to have_db_column(:username).of_type(:string) }
    it { is_expected.to have_db_column(:password_digest).of_type(:string) }
    it { should have_secure_password }
  end

  describe "Associations" do
    it { is_expected.to have_many(:tweets) }
    it { is_expected.to have_many(:likes) }
  end

  describe "Validations" do
    it { is_expected.to validate_presence_of(:email) }
    it { is_expected.to validate_presence_of(:username) }
    it { is_expected.to validate_uniqueness_of(:email) }
  end

  describe "user with tweets" do
    let(:tweet) { create(:tweet) }

    it "can create user with tweets" do
      create(:tweet, tweet: tweet)

      expect(tweet.tweets_count).to eq(1)
    end
  end
end
