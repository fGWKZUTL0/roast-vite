class Auth::SessionsController < DeviseTokenAuth::RegistrationsController
  def index
    if current_user
      render json: { is_login: true, data: current_user }
    else
      render json: { is_login: false, message: "ユーザーが存在しません" }
    end
  end

  def destroy
    if current_user
      render json: { success: false }
    else
      render json: { success: true }
    end
  end
end
