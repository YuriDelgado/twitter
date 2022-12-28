class ApplicationController < ActionController::Base
  helper_method %i[current_user user_logged?]

  add_flash_types :notice, :error

  private

  def current_user
    User.find_by_id(session[:user_id])
  end

  def user_logged?
    current_user.present?
  end

  def authenticate_user!
    redirect_to root_path unless user_logged?
  end
end
