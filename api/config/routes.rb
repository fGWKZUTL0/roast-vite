Rails.application.routes.draw do
  
  get "tweets/index" => "tweets#index"

  get "users/index" => "users#index"

  #ログイン機能のルーティング
  mount_devise_token_auth_for 'User', at: 'auth', controllers: {
    registrations: 'auth/registrations'
  }
  #ログインユーザー取得のルーティング
  namespace :auth do
    resources :sessions, only: %i[index]
  end
end
