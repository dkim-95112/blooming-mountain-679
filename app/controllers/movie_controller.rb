class MovieController < ApplicationController

  def index
    @movies = Movie.all
    
    respond_to do |format|
      format.html  # => index.html.erb
    end
  end
  
  def all_movies
    @movies = Movie.all

    respond_to do |format|
      format.json { render :json => @movies }
    end
  end

  def all_actors
    @actors = Actor.all
    
    respond_to do |format|
      format.json { render :json => @actors }
    end
  end
    
  def cast
    @actors = Actor.joins(:casts).where(["movie_id=?", params[:id]])

    respond_to do |format|
      format.json { render :json => @actors }
    end
  end
  
  def actor
    @movies = Movie.joins(:casts).where(["actor_id=?", params[:id]])

    respond_to do |format|
      format.json { render :json => @movies }
    end
  end

end
