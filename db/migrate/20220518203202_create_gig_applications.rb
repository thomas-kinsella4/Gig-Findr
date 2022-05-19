class CreateGigApplications < ActiveRecord::Migration[6.1]
  def change
    create_table :gig_applications do |t|
      t.integer :gig_id
      t.integer :artist_id
      t.boolean :isApproved

      t.timestamps
    end
  end
end
