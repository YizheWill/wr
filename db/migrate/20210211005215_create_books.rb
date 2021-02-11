class CreateBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :books do |t|
      t.string :title, null: false, unique: true
      t.integer :reference_book_id

      t.timestamps
    end
    add_index :books, :title
  end
end
