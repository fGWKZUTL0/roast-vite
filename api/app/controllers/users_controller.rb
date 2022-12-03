class UsersController < ApplicationController
  require 'securerandom'
  #before_action :require_login, only: [:show, :destroy]

  def new
    @user = User.new
  end

  def create
    user = User.new(nickname: params[:nickname], email: params[:email], password_digest: params[:password_digest],)

    user.username = p SecureRandom.hex(5)

    if user.save
      log_in(user)
      render json: { status: "success"}
    else
      render json: { status: "fail"}
    end
  end

  def show
    #@user = User.find(params[:id])
  end

  def edit
    @user = User.find_by(id: params[:id])
  end

  private
    def user_params
      params.require(:user).permit(:nickname, :email, :password, :password_confirmation, :bio, :icon)
    end
end
