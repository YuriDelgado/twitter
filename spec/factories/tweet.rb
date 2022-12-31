FactoryBot.define do
  factory :tweet do
    tweet_id { nil }
    association :user, strategy: :create
    body { Faker::Movie.quote }
  end

  #trait :with_user do
  #  after(:create) do |user|
  #    create(:tweet, user_id: user.id)
  #  end
  #end
end
