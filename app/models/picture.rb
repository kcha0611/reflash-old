class Picture < ApplicationRecord
  validates :picture_url, presence: true

  belongs_to :user
end
