
class CreateActors < ActiveRecord::Migration
  def change
    create_table :actors, :force => true do |t|
      t.string :name
      t.timestamps
    end
  end
end

