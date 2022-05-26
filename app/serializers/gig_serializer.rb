class GigSerializer < ActiveModel::Serializer
  attributes :id, :agent_id, :venue, :time, :timetwo, :date, :genres, :description
  has_many :gig_applications
  belongs_to :agent
end
