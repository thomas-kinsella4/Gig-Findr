class AgentSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :bio, :profile_img, :isAgent
  has_many :gigs
end
