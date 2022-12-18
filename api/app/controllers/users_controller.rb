class UsersController < ApplicationController
  require 'securerandom'

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
    render json: current_user
  end

  def edit
    @user = User.find_by(id: params[:id])
  end

  private
    def user_params
      params.require(:user).permit(:nickname, :email, :password, :password_confirmation, :bio, :icon)
    end
end
