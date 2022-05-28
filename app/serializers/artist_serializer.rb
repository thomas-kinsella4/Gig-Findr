class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :profile_img, :cover_img, :bio, :socialmedia_links, :song1, :song2, :song3, :video
  has_many :gig_applications
  has_many :gigs
end
