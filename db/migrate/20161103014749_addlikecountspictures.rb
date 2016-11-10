class Addlikecountspictures < ActiveRecord::Migration[5.0]
  def change
    add_column :pictures, :vote_value, :integer, default: 0
  end
end
