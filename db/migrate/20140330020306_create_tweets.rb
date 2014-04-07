class CreateTweets < ActiveRecord::Migration
  def change
    create_table :tweets do |t|
      t.text :mytext

      t.belongs_to :chick
      t.timestamps
    end
  end
end
