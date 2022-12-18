class TweetsController < ApplicationController

  def index
    @tweets = Tweet.find_by_sql("SELECT t.id, t.user_id, t.tweet, t.created_at, u.nickname
      FROM tweets AS t
      RIGHT JOIN users AS u ON t.user_id = u.id
      ORDER BY t.created_at desc")
    render json: @tweets
  end

  def create

    @tweet = Tweet.new(tweet: params[:tweet], user_id: current_user.id)
    
    if @tweet.save
      render json: {status: 200, tweet: @tweet}
    else
      render json: {status: 500}
    end
  end
end
