require 'test_helper'

class BookTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  test 'book needs a title' do
    book = Book.new({ title: 'asdfasdf' })
    assert book.save, 'Book has a title'
  end

  test 'book will fail if it does not have a title' do
    book = Book.new({ genre: 'asdfasdf' })
    assert_not book.save, 'Book does not have title'
  end
end
