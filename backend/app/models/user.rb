class User < ApplicationRecord
  has_secure_password

  has_many :posts, dependent: :destroy
  has_many :likes, dependent: :destroy
  has_many :liked_posts, through: :likes, source: :post

  enum role: { general: 'general', admin: 'admin' }

  validates :email, presence: true, uniqueness: true
  validates :name, presence: true, uniqueness: true
end
