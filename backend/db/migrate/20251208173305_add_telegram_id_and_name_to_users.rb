class AddTelegramIdAndNameToUsers < ActiveRecord::Migration[8.0]
  def change
    add_column :users, :telegram_id, :string
    add_column :users, :name, :string
  end
end
