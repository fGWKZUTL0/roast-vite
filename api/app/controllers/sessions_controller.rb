class SessionsController < ApplicationController

  #before_action :require_login, only: [:destroy]

  def index
    if logged_in?
      render json: {message:"success", currentUser: current_user}
    else
      render json:{message:"fail"}
    end
  end

  def new
    if logged_in?
      redirect_to profile_path(session[:user_id])
    end
  end

  def create
    user = User.find_by(email: params[:email].downcase)
    if user && user.authenticate(params[:password])
      log_in(user)
      render json:{message:"success"}
    else
      render json:{message:"fail", errorMessage:"you failed to login"}
    end
  end

  def destroy
    log_out
    if logged_in?
      render json: {message:"fail"}
    else
      render json: {message:"success"}
    end
  end

end
