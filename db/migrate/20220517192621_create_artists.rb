class CreateArtists < ActiveRecord::Migration[6.1]
  def change
    create_table :artists do |t|
      t.string :username
      t.string :password_digest
      t.string :profile_img
      t.string :cover_img
      t.string :bio
      t.string :socialmedia_links
      t.string :music
      t.string :video

      t.timestamps
    end
  end
end
