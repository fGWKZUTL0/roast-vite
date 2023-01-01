class RenameIdToTidInTweets < ActiveRecord::Migration[7.0]
  def change
    rename_column :tweets, :id, :tid
    rename_column :tweets, :created_at, :t_created_at
    rename_column :tweets, :updated_at, :t_updated_at
  end
end
