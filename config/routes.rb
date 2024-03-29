Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy]
    resources :pictures, only: [:create, :show, :index]
    resources :users, only:[:show] do
      resources :pictures, only:[:index]
    end
    resources :votes, only: [:create, :destroy]
  end

end
