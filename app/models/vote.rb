class Vote < ApplicationRecord
  validates :picture_id, :user_id, presence: true, uniqueness: true

  belongs_to :user

  belongs_to :picture

end
