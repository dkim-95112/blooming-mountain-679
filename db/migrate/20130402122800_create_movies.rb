
class CreateMovies < ActiveRecord::Migration
  def change
    create_table :movies, :force => true do |t|
      t.string :title
      t.timestamps
    end
  end
end


