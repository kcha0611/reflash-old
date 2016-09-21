class Picture < ApplicationRecord
  validates :picture_url, presence: true, uniqueness: true

  belongs_to :user 
end
