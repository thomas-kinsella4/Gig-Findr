class GigSerializer < ActiveModel::Serializer
  attributes :id, :agent_id, :venue, :time, :date, :genres
end
