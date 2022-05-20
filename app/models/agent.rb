class Agent < ApplicationRecord
    has_secure_password

    has_many :gigs

    validates :username, presence: true, uniqueness: true
    validates :password, confirmation: true
end
