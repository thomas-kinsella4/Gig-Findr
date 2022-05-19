Rails.application.routes.draw do

  resources :gigs
  resources :gig_applications
  resources :agents
  resources :artists

  post "/login", to: "sessions#create"
  post "/artist/login", to: "artist_sessions#create"
  delete "/logout", to: "sessions#destroy"

  post "/artist/signup", to: "artists#create"
  post "/agent/signup", to: "agents#create"

  get "/artist/me", to: "artists#show"
  get "/me", to: "agents#show"

  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
