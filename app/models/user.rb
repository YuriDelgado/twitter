class User < ApplicationRecord
  has_secure_password

  has_many :tweets

  validates :username, presence: true
end
