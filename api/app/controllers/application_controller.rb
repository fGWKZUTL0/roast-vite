class ApplicationController < ActionController::API
  include SessionsHelper #全てのコントローラーでSessionsHelperMethodを利用可能にする
  include ActionController::RequestForgeryProtection
  protect_from_forgery with: :exception


  def set_csrf_token_header
    response.set_header('X-CSRF-Token', form_authenticity_token)
  end
end
