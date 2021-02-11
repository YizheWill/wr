@books.each do |book|
  json.set! book.id do
    json.id book.id
    json.title book.title
    json.authors book.authors
    json.createdAt book.created_at
  end
end
