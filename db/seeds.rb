# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
movie_casts = [
  ['Star Trek (2009)', ['Chris Pine', 'Zachary Quinto', 'Leonard Nimoy']],
  ['Star Trek (1966)', ['William Shatner', 'Leonard Nimoy']]
]

#Movie.delete_all
#Actor.delete_all
#Cast.delete_all
movies = movie_casts.each do |title, actors|
  movie = Movie.find_or_create_by_title(title)
  actors.each do |name|
    actor = Actor.find_or_create_by_name(name)
    Cast.find_or_create_by_movie_id_and_actor_id(movie.id, actor.id)
  end
end
