Rails.application.routes.draw do

  get "tweets/index" => "tweets#index"

  get "users/index" => "users#index"
end
