# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

15.times do |i|
  Tweet.create(tweet: "テスト #{i}", user_id: 1)
end

#User.create(nickname: "kitano", email: "kitano@gmail.com", password_digest: "", username: "kitano", bio:"test", icon: "***/***.jpeg")