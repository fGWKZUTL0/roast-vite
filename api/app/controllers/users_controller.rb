class UsersController < ApplicationController
  require 'securerandom'

  def new
  end

  def create
  end

  def show
    if user_signed_in?
      render json: {current_user: current_user, success: true}
    else
      render json: {success: false}
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
