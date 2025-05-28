class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.text :avatar
      t.string :role, null: false, default: 'general'

      t.timestamps
    end
  end
end
