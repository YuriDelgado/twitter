Rails.application.routes.draw do
  get "login", to: "sessions#new"
  post "login", to: "sessions#create"
  get "logout", to: "sessions#destroy"

  resources :users, except: :destroy
  resources :tweets, only: %i(index create)

  post "retweets", to: "retweets#create"
  post "tweet_likes", to: "tweet_likes#create"

  root to: "home#index"
end
