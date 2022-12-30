class TweetsController < ApplicationController

  def index
    tweets = Tweet.find_by_sql("SELECT t.id, t.user_id, t.tweet, t.created_at, u.nickname, u.name
      FROM tweets AS t
      RIGHT JOIN users AS u ON t.user_id = u.id
      WHERE t.user_id = #{current_user.id}
      ORDER BY t.created_at desc")
    render json: {status: 200, tweets: tweets }
  end

  def create
    tweet = Tweet.new(tweet: params[:tweet], user_id: current_user.id)
    if tweet.save
      return_tweet = Tweet.find_by_sql("SELECT t.id, t.user_id, t.tweet, t.created_at, u.nickname, u.name
        FROM tweets AS t
        RIGHT JOIN users AS u ON t.user_id = u.id
        WHERE t.id = #{tweet.id}")

      render json: {status: 200, tweet: return_tweet }
    else
      render json: {status: 500}
    end
  end
end
