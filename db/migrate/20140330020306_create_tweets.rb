class CreateTweets < ActiveRecord::Migration
  def change
    create_table :tweets do |t|
      t.text :mytext

      t.references :chick
      t.timestamps
    end
  end
end
