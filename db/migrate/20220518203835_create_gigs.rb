class CreateGigs < ActiveRecord::Migration[6.1]
  def change
    create_table :gigs do |t|
      t.integer :agent_id
      t.string :venue
      t.integer :time
      t.string :date
      t.string :genres
      t.string :description

      t.timestamps
    end
  end
end
