class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
  #include DeviseHackFakeSession
  include SessionsHelper #全てのコントローラーでSessionsHelperMethodを利用可能にする
  
  before_action do
    I18n.locale = :ja
  end
end
