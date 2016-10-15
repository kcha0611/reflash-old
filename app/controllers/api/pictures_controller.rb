class Api::PicturesController < ApplicationController
  before_action :require_logged_in, only: [:create]
  skip_before_filter :verify_authenticity_token

  def create
    @picture = Picture.new(picture_params)
    @picture.user_id = current_user.id
    if @picture.save
      render "api/pictures/show"
    else
      render json: ["somethings fucked up"]
    end
  end

  def index
    if params[:user_id]
      @pictures = Picture.where(user_id: user_id)
    else
      @pictures = Picture.all
    end
  end

  def show
    @picture = Picture.find(params[:id])
  end

  private

  def picture_params
    params.require(:picture).permit(:picture_url, :subject)
  end

end
