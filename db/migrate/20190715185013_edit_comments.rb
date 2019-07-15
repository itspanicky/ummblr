class EditComments < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :author_id, :integer, null: false
    add_column :comments, :post_id, :integer, null: false
    add_column :comments, :body, :text, null: false

    add_timestamps(:comments)
    
    add_index :comments, :post_id
    add_index :comments, :author_id
  end
end
