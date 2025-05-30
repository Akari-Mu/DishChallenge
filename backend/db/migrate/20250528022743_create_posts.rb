class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.references :user, null: false, foreign_key: true
      t.references :theme, null: false, foreign_key: true
      t.string :title, null: false
      t.text :photograph
      t.text :body
      t.text :materias
      t.text :recipe

      t.timestamps
    end
  end
end
