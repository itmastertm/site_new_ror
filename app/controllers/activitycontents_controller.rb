class ActivitycontentsController < ApplicationController
	before_action :authenticate_user!, :only => [:new, :create, :edit, :update, :destroy] 
	def show
		@activitycontent = Activitycontent.find(params[:id])
	end
end
