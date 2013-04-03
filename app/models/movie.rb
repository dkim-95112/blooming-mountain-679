class Movie < ActiveRecord::Base
  attr_accessible :title
  
  has_many :casts
  has_many :actors, :through => :casts
  validates :title, :presence => true, :uniqueness => true
end


class Actor < ActiveRecord::Base
  attr_accessible :name
  
  has_many :casts
  has_many :movies, :through => :casts
  validates :name, :presence => true, :uniqueness => true
end


# intermediate movie-actor table
class Cast < ActiveRecord::Base
  attr_accessible :movie_id, :actor_id
  
  belongs_to :movie
  belongs_to :actor
  validates :actor_id, :presence => true, :uniqueness => { :scope => :movie_id }
  validates :movie_id, :presence => true
end

