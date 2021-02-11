class Book < ApplicationRecord
  has_many :inter_book_authors
  has_many :authors, through: :inter_book_authors
  has_many :alias_books, class_name: :Book, foreign_key: :reference_book_id
  belongs_to :reference_book, class_name: :Book, foreign_key: :reference_book_id, optional: true
end
