class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :nickname
      t.string :email
      t.string :password_digest
      t.string :username
      t.text :bio
      t.string :icon

      t.timestamps
    end
  end
end