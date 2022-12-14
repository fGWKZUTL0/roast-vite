class SessionsController < ApplicationController
  require 'securerandom'
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
      user.authority = p SecureRandom.hex(8)
      user.save
      render json:{message:"success", user: user, AUTHORITY: user.authority}
    else
      render json:{message:"fail", errorMessage:"you failed to login"}
    end
  end

  def destroy
    user = User.find_by(authority: params[:AUTHORITY])
    user.authority = nil #実質的なログアウト
    if user.authority == nil
      render json: {message:"success"}
    else
      render json: {message:"fail"}
    end
  end

end
