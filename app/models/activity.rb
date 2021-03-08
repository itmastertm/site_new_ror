class Activity < ApplicationRecord
	has_many :activitycontents
	has_one_attached :image
	has_many_attached :images
end
