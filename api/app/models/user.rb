class User < ApplicationRecord
            # Include default devise modules.
            devise :database_authenticatable, :registerable,
                    :recoverable, :rememberable, :trackable, :validatable,
                    :confirmable, :omniauthable
            include DeviseTokenAuth::Concerns::User
  #バリデーション
  #before_save { self.email = email.downcase }
  #VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  #validates :email, presence: true, length: { maximum: 255 },
                    #format: { with: VALID_EMAIL_REGEX },
                    #uniqueness: { case_sensitive: false }
  #validates :password, presence: true, length: { minimum: 6 }, on: :create
  #has_secure_password
end
