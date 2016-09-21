class Api::UsersController < ApplicationController
  # skip_before_action :verify_authenticity_token, except: [:show]
  def new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

    def show
      @user = User.find(params[:id])
    end

    private

    def user_params
      params.require(:user).permit(:username, :password, :f_name, :l_name)
    end
end
