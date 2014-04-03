class CreateChicks < ActiveRecord::Migration
  def change
    create_table :chicks do |t|
      t.string :ip

      t.timestamps
    end
  end
end
