class Tweet < ActiveRecord::Base
  attr_accessible :mytext
  attr_writer :ip

  belongs_to :chick , inverse_of: :tweets
  validates :mytext , presence:true
end
