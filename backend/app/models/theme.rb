class Theme < ApplicationRecord
  has_many :posts, dependent: :destroy

  enum state: { unpublished: 'unpublished', published: 'published', released: 'released' }
end
