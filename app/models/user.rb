class User < ApplicationRecord
  has_secure_password

  has_many :tweets
  has_many :likes

  validates :email, presence: true
  validates :username, presence: true
  validates_uniqueness_of :email
end
