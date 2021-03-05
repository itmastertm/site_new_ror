class PartnersController < ApplicationController
before_action :authenticate_user!, :only => [:new, :create, :edit, :update, :destroy]
	def index
	 	@partners = Partner.all	
	end 	
end
