Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth', skip: [:omniauth_callbacks]
  namespace :auth do
    resources :sessions, only: %i[index]
  end
  
  get "tweets/index" => "tweets#index"
  post "tweets/create" => "tweets#create"

  get "users/index" => "users#index"
  post "users/create" => "users#create"
  get "users/show" => "users#show"

  get "sessions/index" => "sessions#index"
  post "sessions/create" => "sessions#create"
  post "sessions/destroy" => "sessions#destroy"
end
