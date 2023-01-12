class TweetsController < ApplicationController

  def index
    followed_id_lists = Follow.where(follower_id: current_user.id).pluck(:followed_id)
    followed_id_lists.push(current_user.id)

    tweets = Tweet.joins(:user).where(user_id: followed_id_lists).select("tweets.tid, tweets.tweet, tweets.created_at, users.nickname, users.name, users.image")

    render json: {
      status: 200,
      tweets: tweets
    }
  end

  def create
    tweet = Tweet.new(tweet: params[:tweet], user_id: current_user.id)
    if tweet.save
      tweet = Tweet.joins(:user).where(tid: tweet.tid).select("tweets.tid, tweets.tweet, tweets.created_at, users.nickname, users.name, users.image")
      render json: {
        status: 200,
        tweet: tweet
      }
    else
      render json: {status: 500}
    end
  end
end
