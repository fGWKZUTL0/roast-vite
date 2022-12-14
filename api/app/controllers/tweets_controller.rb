class TweetsController < ApplicationController
  def index
    @tweets = Tweet.all
    render json: @tweets
  end

  def create
    current_user = User.find_by(username: params[:username])
    @tweet = Tweet.new(tweet: params[:tweet], user_id: current_user.id)
    
    if @tweet.save
      render json: {message: "success" }
    else
      render json: {message: "fail"}
    end
  end
end
