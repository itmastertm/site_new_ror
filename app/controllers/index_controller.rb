class IndexController < ApplicationController
  def index
  	@abouts = About.all
  end
end
