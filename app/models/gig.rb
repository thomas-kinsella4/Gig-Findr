class Gig < ApplicationRecord
    has_many :gig_applications
    has_many :artists, through: :gig_applications
    belongs_to :agent
end
