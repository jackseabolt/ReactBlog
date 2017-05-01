class AddPictureToPost < ActiveRecord::Migration[5.0]
  def up
    add_attachment :posts, :picture
  end

  def down
    remove_attachment :posts, :picture
  end
end
