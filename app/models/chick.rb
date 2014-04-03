class Chick < ActiveRecord::Base
  attr_accessible :ip

  has_many :tweets , inverse_of: :chick
  validates :ip , presence: true , uniqueness: true
end
