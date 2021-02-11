require 'test_helper'

class AuthorTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  test 'author has a name' do
    author = Author.new({})
    assert_not author.save, 'Author needs a name'
  end
end
