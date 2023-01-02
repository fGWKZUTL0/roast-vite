class FollowsController < ApplicationController
  def index
    user = User.find_by(id: params[:user_id])
    if current_user.id == user.id
      render json: { relation: "same" }
    elsif current_user.following?(user)
      render json: { relation: "following" }
    else
      render json: { relation: "notFollowing" }
    end
  end

  def create
    current_user.follow(params[:user_id])
    followed_user = User.find_by(id: params[:user_id])
    if current_user.following?(followed_user)
      render json: {status: "success"}
    else
      render json: {status: "failed"}
    end
  end

  def destroy
    current_user.unfollow(params[:user_id])
    followed_user = User.find_by(id: params[:user_id])
    if !current_user.following?(followed_user)
      render json: {status: "success"}
    else
      render json: {status: "failed"}
    end
  end

  def following
    followings_id = Follow.where(follower_id: params[:user_id]).select(:followed_id)
    followings_user = User.where(id: followings_id)
    
    render json: {status: "success", users: followings_user}
  end

  def follower
    followers_count = Follow.where(followed_id: user.id).count
  end
end
