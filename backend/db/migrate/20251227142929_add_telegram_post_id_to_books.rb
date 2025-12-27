class AddTelegramPostIdToBooks < ActiveRecord::Migration[8.0]
  def change
    add_column :books, :telegram_post_id, :string
  end
end
