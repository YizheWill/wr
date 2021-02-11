class AddColumnsToBook < ActiveRecord::Migration[6.0]
  def change
    add_column :books, :ISBN, :string, unique: true
    add_column :books, :summary, :text
    add_column :books, :quote, :text
  end
end
