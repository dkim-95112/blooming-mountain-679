class MovieController < ApplicationController

  def moviedb
    @movies = Movie.all
    render :layout => false
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
    
  def actor_list
    @actors = Actor.joins(:casts).where(["movie_id=?", params[:id]])
    respond_to do |format|
      format.json { render :json => @actors }
    end
  end
  
  def movie_list
    @movies = Movie.joins(:casts).where(["actor_id=?", params[:id]])

    respond_to do |format|
      format.json { render :json => @movies }
    end
  end

end
