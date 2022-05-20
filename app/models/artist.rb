class Artist < ApplicationRecord
    has_secure_password

    has_many :gig_applications
    has_many :gigs, through: :gig_applications 

    validates :username, presence: true, uniqueness: true
    validates :password, confirmation: true
end
