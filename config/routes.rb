Rails.application.routes.draw do
  get "login", to: "sessions#new"
  post "login", to: "sessions#create"
  get "logout", to: "sessions#destroy"

  resources :tweets 
  post "retweet", to: "tweets#retweet"

  resources :users, except: [:destroy]
  root to: "home#index"
end
