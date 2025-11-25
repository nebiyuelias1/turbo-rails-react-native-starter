class Book < ApplicationRecord
  validates :title, presence: true
  validates :author, presence: true

  has_many :book_tags, dependent: :destroy
  has_many :tags, through: :book_tags
  has_many :ratings, dependent: :destroy

  def average_rating
    ratings.average(:score)&.round(1) || 0
  end

  def user_rating(user)
    ratings.find_by(user: user)
  end
end
