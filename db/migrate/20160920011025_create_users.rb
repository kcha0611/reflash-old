class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :f_name
      t.string :l_name
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :img_url
      t.timestamps
    end
  end
end
