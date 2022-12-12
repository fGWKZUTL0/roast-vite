class TweetsController < ApplicationController
  def index
    @tweets = Tweet.all
    render json: @tweets
  end

  def create
    user_id = current_user.id #session[:user_id]がnullになっている

    @tweet = Tweet.new(tweet: params[:tweet], user_id: user_id)
    
    if @tweet.save
      render json: {message: "success", currentUser: current_user }
    else
      render json: {message: "fail", currentUser: current_user}
    end
  end
end
