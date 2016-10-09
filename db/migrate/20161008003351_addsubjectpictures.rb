class Addsubjectpictures < ActiveRecord::Migration[5.0]
  def change
    add_column :pictures, :subject, :string
  end
end
