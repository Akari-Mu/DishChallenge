class CreateThemes < ActiveRecord::Migration[6.1]
  def change
    create_table :themes do |t|
      t.string :title, null: false
      t.timestamp :publish_at
      t.string :state, null: false, default: 'unpublished'

      t.timestamps
    end
  end
end
