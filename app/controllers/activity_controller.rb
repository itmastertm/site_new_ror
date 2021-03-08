class ActivityController < ApplicationController
	before_action :authenticate_user!, :only => [:new, :create, :edit, :update, :destroy] 
	def show
		@activity = Activity.find(params[:id])
	end
end
