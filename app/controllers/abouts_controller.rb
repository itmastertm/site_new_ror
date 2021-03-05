class AboutsController < ApplicationController
	before_action :authenticate_user!, :only => [:new, :create, :edit, :update, :destroy] 
	def show
		
		@about = About.find(params[:id])	
	end
end
