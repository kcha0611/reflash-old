class Addfullscreenurltopicture < ActiveRecord::Migration[5.0]
  def change
    add_column :pictures, :full_screen_url, :string
  end
end
