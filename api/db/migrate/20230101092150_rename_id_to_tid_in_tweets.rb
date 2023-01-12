class RenameIdToTidInTweets < ActiveRecord::Migration[7.0]
  def change
    rename_column :tweets, :id, :tid
  end
end
