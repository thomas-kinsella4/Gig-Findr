class CreateAgents < ActiveRecord::Migration[6.1]
  def change
    create_table :agents do |t|
      t.string :username
      t.string :password_digest
      t.string :bio
      t.string :profile_img
      t.boolean :isAgent

      t.timestamps
    end
  end
end
