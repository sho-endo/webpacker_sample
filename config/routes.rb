Rails.application.routes.draw do
  root to: 'home#top'
  get '/custom', to: 'home#custom'
  get '/counter', to: 'counter#top'
  get '/stopwatch', to: 'stopwatch#top'
end
