class RetweetsController < ApplicationController
  before_action :authenticate_user!

  def create
    retweet = current_user.tweets.new(tweet_id: params[:tweet_id])
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
end
