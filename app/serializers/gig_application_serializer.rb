class GigApplicationSerializer < ActiveModel::Serializer
  attributes :id, :gig_id, :artist_id, :isApproved
end
