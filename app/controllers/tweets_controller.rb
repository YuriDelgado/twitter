class TweetsController < ApplicationController
  before_action :authenticate_user!

  def index
    @tweets = Tweet.includes(:user).ordered
  end

  def create
    tweet = current_user.tweets.new(tweet_params)
    respond_to do |format|
      format.json do
        if tweet.save
          render(json: { tweet: tweet.json_response }, status: :created)
        else
          render(json: tweet.errors, status: :unprocessable_entity)
        end
      end
    end
  end

  def show
    @tweet = Tweet.find(params[:id])
  end

  def retweet
    tweet = Tweet.find(params[:id])
    retweet = current_user.tweets.new(tweet_id: tweet.id, body: tweet.body)
    respond_to do |format|
      format.json do
        if retweet.save
          render(json: { tweet: retweet.json_response }, status: :created)
        else
          render(json: retweet.errors, status: :unprocessable_entity)
        end
      end
    end
  end

  private

  def tweet_params
    params.require(:tweet).permit(:body)
  end
end
