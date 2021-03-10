Rails.application.routes.draw do
  scope "(:locale)", locale: /#{I18n.available_locales.join("|")}/ do
    get 'login/index'
    mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
    devise_for :users
    get 'admin/index'
    get 'index/index'
    root to: "index#index"
  	
	  resources :abouts
	  resources :activity, only: :show
	  resources :products, only: :show
	  resources :partners, only: [:index, :show]
	  


  match '/contacts',     to: 'contacts#new',             via: 'get'
resources "contacts", only: [:new, :create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

	end  
  
