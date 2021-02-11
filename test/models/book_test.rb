require 'test_helper'

class BookTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  test 'book needs a title' do
    book = Book.new({ ISBN: 'asdfasdfasdf', summary: 'asdfjalsdjfkl', quote: 'asdfjlasdfjl' })
    assert_not book.save, 'Book needs a title'
  end
end
