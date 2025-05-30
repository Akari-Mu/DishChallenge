class Post < ApplicationRecord
  belongs_to :user
  belongs_to :theme

  mount_uploader :photograph, PhotographUploader

  has_many :likes, dependent: :destroy
  has_many :liked_users, through: :likes, source: :user

  validates :title, :theme_id, presence: true
end
