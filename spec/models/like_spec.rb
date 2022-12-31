require 'rails_helper'

RSpec.describe Like, type: :model do
  describe "Database columns" do
    it { is_expected.to have_db_column(:user_id).of_type(:integer) }
    it { is_expected.to have_db_column(:tweet_id).of_type(:integer) }
  end

  describe "Associations" do
    it { is_expected.to belong_to(:user) }
    it { is_expected.to belong_to(:tweet) }
  end

  describe "Validations" do
    it { is_expected.to validate_uniqueness_of(:user_id).scoped_to(:tweet_id).case_insensitive }
  end

  describe "safsdf" do
    it { expect(true).to be(true) }
  end
end
