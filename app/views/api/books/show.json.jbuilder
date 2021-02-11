json.book do
  json.extract! @book, :id, :title, :authors, :alias_books, :reference_book
end
