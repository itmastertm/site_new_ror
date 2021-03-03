class Partner < ApplicationRecord
	has_one_attached :image
	has_many_attached :images
end
