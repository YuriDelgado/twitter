class TweetLikesController < ApplicationController
  before_action :authenticate_user!

  def create
    like = current_user.likes.new(tweet_id: params[:tweet_id])

    respond_to do |format|
      format.json do
        if like.save
          render(json: { tweet: like.tweet.json_response }, status: :created)
        else
          render(json: like.errors, status: :unprocessable_entity)
        end
      end
    end
  end
end
