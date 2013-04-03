
class CreateCasts < ActiveRecord::Migration
  def change
    create_table :casts, :id => false, :force => true do |t|
      t.references :actor
      t.references :movie
      t.timestamps
    end
  end
end

