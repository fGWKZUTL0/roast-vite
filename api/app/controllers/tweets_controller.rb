class TweetsController < ApplicationController
  def index
    @tweets = Tweet.all
    render json: @tweets
  end

  def create
    user_id = current_user.id

    @tweet = Tweet.new(tweet: params[:tweet], user_id: user_id)
    
    if @tweet.save
      render json: {message: "success"}
    else
      render json: {message: "fail"}
    end
  end
end
