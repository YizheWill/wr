@authors.each do |author|
  json.set! author.id do
    json.id author.id
    json.name author.name
    json.books author.books
    json.createdAt author.created_at
  end
end
