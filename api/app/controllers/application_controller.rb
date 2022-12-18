class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
  before_action do
    I18n.locale = :ja
  end
  before_action :authenticate_user!, except: [:index, :show, :new, :create]
  #include DeviseHackFakeSession
  include SessionsHelper #全てのコントローラーでSessionsHelperMethodを利用可能にする

end
