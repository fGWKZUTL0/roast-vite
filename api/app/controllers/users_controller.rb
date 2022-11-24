class UsersController < ApplicationController
  def index
    render json: {status: "success", data: User.all}
  end
end
