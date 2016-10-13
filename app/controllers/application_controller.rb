class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  protect_from_forgery with: :null_session, if: Proc.new { |c| c.request.format == 'application/json' }

  helper_method :current_user, :logged_in?, :require_logged_in

  private

  def current_user
    return nil unless session[:session_token]
    @current_user || User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def login!(user)
    session[:session_token] = user.reset_session_token!
  end

  def require_logged_in
    render json: ["You must be signed in!"], status: 401 unless current_user
  end

end
