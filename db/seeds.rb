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

15.times do
  book = Book.create({ title: Faker::Book.title, ISBN: Faker::Barcode.ean_with_composite_symbology(8), summary: Faker::Books::Lovecraft.paragraphs(number: 2).join(' '), quote: Faker::Quote.matz, genre: Faker::Book.genre })
  (1..10).to_a.sample((1..5).to_a.sample).each do |el|
    InterBookAuthor.create({ book_id: book.id, author_id: el })
    p "book id: #{book.id}, author id: #{el}, title is #{book.title}"
  end
end

50.times do
  id = (1..15).to_a.sample
  book = Book.find(id)
  authors = book.authors
  new_book = Book.create({ reference_book_id: id, title: book.title + ' ' + Faker::Space.galaxy, summary: book.summary, quote: book.quote, genre: book.genre, ISBN: book.ISBN })
  authors.each do |author|
    InterBookAuthor.create({ book_id: new_book.id, author_id: author.id })
  end
end
