class User < ApplicationRecord
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :validatable,
          :confirmable, :omniauthable
  include DeviseTokenAuth::Concerns::User

  has_many :tweets #関連名
  has_many :likes, dependent: :destroy

    # フォローをした、されたの関係
  has_many :follows, class_name: "Follow", foreign_key: "follower_id", dependent: :destroy
  has_many :reverse_of_follows, class_name: "Follow", foreign_key: "followed_id", dependent: :destroy

  # 一覧画面で使う
  has_many :followings, through: :follows, source: :followed
  has_many :followers, through: :reverse_of_follows, source: :follower

  # フォローしたときの処理
  def follow(user_id)
    follows.create(followed_id: user_id)
  end
  # フォローを外すときの処理
  def unfollow(user_id)
    follows.find_by(followed_id: user_id).destroy
  end
  # フォローしているか判定
  def following?(user)
    followings.include?(user)
  end
     
  def liked_by?(tweet_id) #この投稿をいいねしているか
    likes.where(tweet_id: tweet_id).exists?
  end
  #バリデーション
  #before_save { self.email = email.downcase }
  #VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  #validates :email, presence: true, length: { maximum: 255 },
  #                  format: { with: VALID_EMAIL_REGEX },
  #                  uniqueness: { case_sensitive: false }
  #validates :password, presence: true, length: { minimum: 6 }, on: :create

  #icon uploaderとの関係を記述
  #mount_uploader :icon, IconUploader
end
