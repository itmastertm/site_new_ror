class ProductsController < ApplicationController
before_action :authenticate_user!, :only => [:new, :create, :edit, :update, :destroy]
def show
	
end
end
