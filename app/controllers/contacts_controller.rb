class ContactsController < ApplicationController
#before_action :authenticate_user!, :only => [:new, :create, :edit, :update, :destroy]
	def new
	 	@contact = Contact.new
	end 

 	def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    if verify_recaptcha(model: @contact) && @contact.deliver
		flash[:success] = 'Сообщение отправлено'
    else
     flash.now[:danger] = 'Не возможно отправить сообщение.'
      render :new
    end
  end

end
