Rails.application.routes.draw do
  
  get "tweets/index" => "tweets#index"
  post "tweets/create" => "tweets#create"

  get "users/index" => "users#index"
  post "users/create" => "users#create"

  get "sessions/index" => "sessions#index"
  post "sessions/create" => "sessions#create"
  post "sessions/destroy" => "sessions#destroy"
end
