
Rails.application.routes.draw do
  get "home/index"
  resource :session
  resources :passwords, param: :token
  resources :products
  resources :products do
    resources :subscribers, only: [ :create ]
  end
  resource :unsubscribe, only: [ :show ]
   get "sign_up", to: "users#new"
  post "users", to: "users#create"
  root "home#index"
end
