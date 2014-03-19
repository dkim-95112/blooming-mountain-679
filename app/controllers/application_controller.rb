class ApplicationController < ActionController::Base
  protect_from_forgery

	respond_to do |format|
		format.html
	end

	def index
	end
end
