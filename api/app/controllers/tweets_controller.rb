class TweetsController < ApplicationController

  def index
    followed_id_lists = Follow.where(follower_id: current_user.id).pluck(:followed_id)

    tweets = Tweet.find_by_sql("SELECT t.tid, t.user_id, t.tweet, t.t_created_at AS created_at, u.nickname, u.name
      FROM tweets AS t
      RIGHT JOIN users AS u ON t.user_id = u.id
      WHERE t.user_id IN (#{followed_id_lists.join(',')})
      ORDER BY t.t_created_at desc")
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

  private 
    def getTimeline()
      followed_id_lists = Follow.where(follower_id: current_user.id).select(:followed_id)
      tweets = Tweet.where(user_id: followed_id_lists).order(created_at: :desc)
    end
end
