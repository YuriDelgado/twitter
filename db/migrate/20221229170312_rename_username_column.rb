class RenameUsernameColumn < ActiveRecord::Migration[7.0]
  def change
    rename_column :users, :username, :email
    add_column :users, :username, :string
  end
end
