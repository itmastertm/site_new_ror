class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name_ru
      t.string :name_en
      t.string :name_tm
      t.string :ru_title
      t.string :en_title
      t.string :tm_title
      t.text :ru_body
      t.text :en_body
      t.text :tm_body

      t.timestamps
    end
  end
end
