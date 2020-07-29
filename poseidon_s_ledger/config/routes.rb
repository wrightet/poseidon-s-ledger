Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :destroy]
    resource :session, only: [:create, :new, :destroy]
  end
  root 'static_pages#root'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
