class FooController < ApplicationController

  def time_series
    @time = Time.now.tv_sec
    @large = rand(25)
    @medium = rand(75)
    @small = rand(40)
    respond_to do |format|
      format.json { render :json => {:time => @time, :large => @large, :medium => @medium, :small => @small} }
    end
  end

  def charting_demo
    render :layout => false
  end
end
