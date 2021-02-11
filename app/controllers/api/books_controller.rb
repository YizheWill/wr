class Api::BooksController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_book, only: %i(show update destroy)

  def index
    @books = Book.all
  end

  def show
    if @book
      render :show
    else
      render json: @book.errors.full_messages, status: 422
    end
  end

  def create
    @book = Book.new(book_params)
    if @book.save
      render :show
    else
      render json: @book.errors.full_messages, status: 422
    end
  end

  def update
    if @book.update(book_params)
      render :show
    else
      render json: @book.errors.full_messages, status: 422
    end
  end

  def destroy
    if @book.destroy
      render :show
    else
      render json({ msg: 'cannot delete' })
    end
  end

  private

  def set_book
    @book = Book.find_by(id: params[:id])
  end

  def book_params
    params.require(:book).permit(:title, :reference_book_id, :id)
  end
end
