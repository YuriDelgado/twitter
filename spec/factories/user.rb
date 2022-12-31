FactoryBot.define do
  factory :user do
    username { "userName" }
    sequence(:email) { |n| "email_#{n}@test.xn" }
    password { "1234" }
  end

  trait :with_tweets do
    after(:create) do |user|
      create(:tweet, user_id: user.id)
    end
  end
end
