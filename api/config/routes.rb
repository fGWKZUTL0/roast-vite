Rails.application.routes.draw do
  get 'follows/followings'
  get 'follows/followers'
  mount_devise_token_auth_for 'User', at: 'auth', skip: [:omniauth_callbacks], controllers: {
    registrations: 'auth/registrations'
  }
  
  get "tweets/index" => "tweets#index"
  post "tweets/create" => "tweets#create"

  get "users/index" => "users#index"
  post "users/create" => "users#create"
  post "users/show" => "users#show"
  patch "users/update" => "users#update"

  post "follow/index" => "follows#index"
  post "follow/create" => "follows#create"
  post "follow/destroy" => "follows#destroy"
  post "follow/following" => "follows#following"
  post "follow/follower" => "follows#follower"

end
