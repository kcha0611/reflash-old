class Api::VotesController < ApplicationController
  before_action :require_logged_in
  skip_before_action :verify_authenticity_token

  def create
    @vote = Vote.new(vote_params)
    @vote.user_id = current_user.id
    if @vote
      render 'api/votes/show'
    else
      render json: ["somethings fucked up"]
    end
  end

  def destroy
    @vote = Vote.find_by(vote_params)
    if @vote.destroy
      render 'api/votes/show'
    else
      render json: ["somethings fucked up"]
    end
  end

  private

  def vote_params
    params.require(:vote).permit(:user_id, :picture_id)
  end

end
