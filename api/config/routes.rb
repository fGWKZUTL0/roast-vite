Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'

  get "tweets/index" => "tweets#index"

  get "users/index" => "users#index"
end
