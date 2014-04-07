class Tweet < ActiveRecord::Base
  attr_accessible :mytext
  attr_writer :ip

  scope :recent , order( "created_at DESC")

  belongs_to :chick , inverse_of: :tweets
  validates :mytext , presence:true
end
