class TweetsController < ActionController::Base

  def index
    respond_to do | format |
      format.html { 
        render :layout => false
      }
      format.json {
        #sql = 'select t.mytext , c.ip from tweets t left outer join chicks c on t.chick_id = c.id'
        #r = ActiveRecord::Base.connection.execute( sql ).values
        @tweets = Tweet.includes ( :chick )
        render :json => {
          :http_host => env[ "HTTP_HOST" ] ,
          :remote_addr => env[ "REMOTE_ADDR" ] ,
          :tweets => @tweets.recent.as_json(
            :include => {
             :chick => { :only => :ip }
            }
          )
        }
      }
    end
  end

  def create
    respond_to do | format |
      @chick = Chick.find_or_create_by_ip( request.remote_addr )
      @tweet = @chick.tweets.new
      @tweet.mytext = params[ :mytext ]
      result = @tweet.save
      format.json {
        render :json => {
          :result => result ,
          :tweet => @tweet
        }
      }
    end
  end
  def update
    respond_to do | format |
      @tweet = Tweet.find( params[ :id ] )
      @tweet.mytext = params[ :mytext ]
      result = @tweet.save
      format.json {
        render :json => {
          :result => result ,
          :tweet => @tweet
        }
      }
    end
  end
  def destroy
    respond_to do | format |
      result = Tweet.destroy( params[ :id ] )
      format.json {
        render :json => { :result => result }
      }
    end
  end
end
