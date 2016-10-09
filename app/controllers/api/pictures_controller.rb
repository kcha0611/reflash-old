class Api::PicturesController < ApplicationController
  before_action :require_logged_in, only: [:create]
  def create
    @picture = Picture.new(picture_params)
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
    params.require(:picture).permit(:picture_url, :user_id, :subject)
  end

end
