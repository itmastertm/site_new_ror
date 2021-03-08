Rails.application.routes.draw do
  get 'login/index'
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users
  get 'admin/index'
  get 'index/index'
  	scope "(:locale)", locale: /#{I18n.available_locales.join("|")}/ do
	  resources :abouts
	  resources :activity, only: :show
	  resources :products, only: :show
	  resources :partners, only: [:index, :show]
	  resources :contacts
	end  
  root to: "index#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
