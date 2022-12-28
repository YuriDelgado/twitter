class UsersController < ApplicationController
  before_action :set_user, only: %i[edit update]
  def new
    @user = User.new
  end

  def create
    @user = User.create(user_params)
    session[:user_id] = @user.id
    redirect_to tweets_path
  end

  def edit
  end

  def update
    @user.username = user_params[:username]
    if @user.save
      return redirect_to tweets_path, notice: "Successfully updated"
    end

    redirect_to tweets_path, error: "Can't save this user"
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

  def set_user
    @user = User.find(params[:id])
  end
end
