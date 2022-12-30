class UsersController < ApplicationController
  require 'securerandom'

  def index
    if user_signed_in?
      render json: {current_user: current_user, success: true}
    else
      render json: {success: false}
    end
  end

  def new
  end

  def create
  end

  def show
    user = User.find_by(name: params[:name])
    
    if user != nil
      render json: {user: user, success: true}
    else
      render json: {success: false}
    end

  end

  def edit
    @user = User.find_by(id: params[:id])
  end

  def update
    User.update(current_user.id, nickname: params[:nickname], bio: params[:bio])

    render json: {user: current_user, success: true}
  end

  private
    def user_params
      params.require(:user).permit(:nickname, :email, :password, :password_confirmation, :bio, :icon)
    end
end
