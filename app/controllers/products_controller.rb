class ProductsController < ApplicationController
before_action :authenticate_user!, :only => [:new, :create, :edit, :update, :destroy]
def show
	@product = Product.find(params[:id])
end
end
