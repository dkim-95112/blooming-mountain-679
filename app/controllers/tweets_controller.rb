class TweetsController < ActionController::Base

  def index
      respond_to do | format |
        format.html { 
            render :layout => false
        }
        format.json {
          #sql = 'select t.mytext , c.ip from tweets t left outer join chicks c on t.chick_id = c.id'
          #r = ActiveRecord::Base.connection.execute( sql ).values
          tweets = Tweet.includes ( :chick )
          render :json => {
            :tweets => tweets.as_json( :include => { :chick => { :only => :ip } } ) ,
            :foo => 'bar'
          }
        }
      end
  end


  def all_tweets
    @tweets = Tweet.all
    respond_to do |format|
      format.json { render :json => @tweets }
    end
  end
  def tweet_list
    @tweets = Tweet.joins(:chicks).where([ "chick_id=?" , params[:id] ])
    respond_to do |format|
      format.json { render :json => @tweets }
    end
  end
  def tweet
    debugger
    
    chick = Chick.find_or_create_by_ip( params[ :remoteip ] )
    tweet = Tweet.find_or_create_by_chick_id_and_mytext( chick.id , params[ :text ] )
    respond_to do |format|
      format.json { render json: tweet }
    end
   end
end
