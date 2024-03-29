class Picture < ApplicationRecord
  validates :picture_url, :subject, presence: true

  belongs_to :user

  has_many :votes
end
