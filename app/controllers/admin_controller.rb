class AdminController < ApplicationController	
  def index
  	if current_user
  		redirect_to '/admin'
  	end	
  end
end
