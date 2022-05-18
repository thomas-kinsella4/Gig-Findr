class Agent < ApplicationRecord
    has_secure_password

    has_many :gigs
end
