class RenameTweetColumn < ActiveRecord::Migration[7.0]
  def change
    rename_column :tweets, :tweet, :body
  end
end
