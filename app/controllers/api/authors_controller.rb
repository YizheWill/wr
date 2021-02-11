class Api::AuthorsController < ApplicationController
  before_action :set_book, only: %i(show update destroy)

  def index
    @authors = Author.all
  end

  def show
    if @author
      render :show
    else
      render json: @author.errors.full_messages, status: 422
    end
  end

  def create
    @author = Author.new(author_params)
    if @author.save
      render :show
    else
      render json: @author.errors.full_messages, status: 422
    end
  end

  def update
    if @author.update(author_params)
      render :show
    else
      render json: @author.errors.full_messages, status: 422
    end
  end

  def destroy
    if @author.destroy
      render :show
    else
      render json({ msg: 'cannot delete' })
    end
  end

  private

  def set_book
    @author = Author.find_by(id: params[:id])
  end

  def author_params
    params.require(:author).permit(:name)
  end
end
