Rails.application.routes.draw do
  
  get "tweets/index" => "tweets#index"

  get "users/index" => "users#index"
  post "users/create" => "users#create"

  get "sessions/index" => "sessions#index"
end
