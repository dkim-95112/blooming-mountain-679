class Chick < ActiveRecord::Base
  attr_accessible :ip

  has_many :tweets , inverse_of: :chick , dependent: :destroy
  validates :ip , presence: true , uniqueness: true
end
