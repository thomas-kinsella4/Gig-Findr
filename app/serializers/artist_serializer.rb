class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :profile_img, :cover_img, :bio, :socialmedia_links, :music, :video
end
