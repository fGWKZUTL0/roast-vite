class ApplicationController < ActionController::API
  include SessionsHelper #全てのコントローラーでSessionsHelperMethodを利用可能にする
end
