Rails.application.routes.draw do
  root to: 'home#top'
  get '/counter', to: 'counter#top'
end
