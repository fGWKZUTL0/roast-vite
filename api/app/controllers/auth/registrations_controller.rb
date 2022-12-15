class Auth::RegistrationsController < DeviseTokenAuth::RegistrationsController
  private
    def sign_up_params
      params.require(:confirm_success_url).permit(:email, :password, :password_confirmation)
    end
end