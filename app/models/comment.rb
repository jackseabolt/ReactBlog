class Comment < ApplicationRecord

	belongs_to :post 

	def time_ago
		"DAAAANK"
	end
	
end
