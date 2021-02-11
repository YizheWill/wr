class Author < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  has_many :inter_book_authors
  has_many :books, through: :inter_book_authors
end
