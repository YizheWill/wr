# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

10.times do
  Author.create({ name: Faker::Book.author })
end

40.times do
  book = Book.create({ title: Faker::Book.title })
  (1..10).to_a.sample((1..5).to_a.sample).each do |el|
    InterBookAuthor.create({ book_id: book.id, author_id: el })
    p "book id: #{book.id}, author id: #{el}, title is #{book.title}"
  end
end

20.times do
  id = (1..40).to_a.sample
  book = Book.find(id)
  authors = book.authors
  authors.each do |author|
    Book.create({reference_book_id: id, title: book.title + })
  end
end
