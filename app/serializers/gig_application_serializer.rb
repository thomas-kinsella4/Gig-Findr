class GigApplicationSerializer < ActiveModel::Serializer
  attributes :id, :gig_id, :artist_id, :isApproved
  belongs_to :gig
  belongs_to :artist
end
