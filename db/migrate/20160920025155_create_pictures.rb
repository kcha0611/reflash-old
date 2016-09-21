class CreatePictures < ActiveRecord::Migration[5.0]
  def change
    create_table :pictures do |t|
      t.integer :user_id
      t.string :picture_url, null: false
      t.timestamps
    end
  end
end
