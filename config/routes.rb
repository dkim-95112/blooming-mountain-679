MyPortfolio::Application.routes.draw do
  root :to => 'application#index'

  resources :tweets


  get 'helloapp' => 'helloapp#index'

  get 'webrtc' => 'samples#webrtc'
  get 'samples/algos2' => 'samples#algos2'
  get 'algos/sorted' => 'algos#sorted'
  
  get 'foo/time_series' => 'foo#time_series'
  get 'foo/charting_demo' => 'foo#charting_demo'
  
  get 'samples/etrade' => 'samples#etrade'  
  get 'samples/jquery_plugin' => 'samples#jquery_plugin'
  get 'samples/ots_way' => 'samples#ots_way'
  get 'samples/algos' => 'samples#algos'
  get 'samples/vmware' => 'samples#vmware'
  get 'samples/uicontrols' => 'samples#uicontrols'
  
  get 'moviedb' => 'movie#moviedb'
  get 'all_movies'  => 'movie#all_movies'
  get 'all_actors'  => 'movie#all_actors'
  get 'movie/:id/actor_list' => 'movie#actor_list'
  get 'actor/:id/movie_list' => 'movie#movie_list'
  
  
  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  # root :to => 'welcome#index'

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id))(.:format)'
end
