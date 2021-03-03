class AboutsController < ApplicationController
	before_action :authenticate_user!, :only => [:new, :create, :edit, :update, :destroy] 
	def show
		@abouts = About.all
	end
end
