class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
  before_action do
    I18n.locale = :ja
  end
  before_action :authenticate_user!, except: [:index, :show, :new, :create]
  before_action :configure_permitted_parameters, if: :devise_controller?, except: [:index, :show, :new, :create]

  # bioを変更可能にする例
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:account_update, keys: [:nickname, :bio, :image])
  end
end
