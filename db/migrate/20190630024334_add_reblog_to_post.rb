class AddReblogToPost < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :reblog_post_id, :integer
    add_column :posts, :reblog_description, :string
    add_index :posts, :reblog_post_id
  end
end
