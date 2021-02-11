@books.each do |book|
  json.set! book.id do
    json.id book.id
    json.title book.title
    json.authors book.authors
    json.createdAt book.created_at
    json.aliasBooks book.alias_books
    json.referenceBook book.reference_book
    json.iSBN book.ISBN
  end
end
