class TradesController < ApplicationController
	before_action :authenticate_user!, :only => [:new, :create, :edit, :update, :destroy]
def show
	@trade = Trade.find(params[:id])
end
end
