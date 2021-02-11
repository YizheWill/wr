Rails.application.routes.draw do
  namespace :api do
    resources :books
    resources :authors
  end
  root 'home#index'
  match '*path', to: 'home#index', via: [:get]
end
