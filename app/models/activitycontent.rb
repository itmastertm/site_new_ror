class Activitycontent < ApplicationRecord
	has_one_attached :image	
  belongs_to :activity
end
