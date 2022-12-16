class UsersController < ApplicationController
  require 'securerandom'
  #before_action :require_login, only: [:show, :destroy]

  def new
    @user = User.new
  end

  def create
    user = User.new(nickname: params[:nickname], email: params[:email], password: params[:password])

    user.username = p SecureRandom.hex(5)

    if user.save
      log_in(user)
      render json: { message: "success", user: user}
    else
      render json: { message: "fail"}
    end
  end

  def show
    if user_signed_in?
      render json: { user: current_user}
    else
      render json: { success: false}
    end
  end

  def edit
    @user = User.find_by(id: params[:id])
  end

  private
    def user_params
      params.require(:user).permit(:nickname, :email, :password, :password_confirmation, :bio, :icon)
    end
end
