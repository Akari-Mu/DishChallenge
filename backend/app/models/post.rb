class Post < ApplicationRecord
  belongs_to :user
  belongs_to :theme

  has_many :likes, dependent: :destroy
  has_many :liked_users, through: :likes, source: :user
end
