require 'test_helper'

class AuthorTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  test 'author has a name' do
    author = Author.new({})
    assert_not author.save, 'Author needs a name'
  end

  test 'will pass if author has a name' do
    author = Author.new({ name: 'Will Wang' })
    assert author.save, 'Author do have a name'
  end
end
