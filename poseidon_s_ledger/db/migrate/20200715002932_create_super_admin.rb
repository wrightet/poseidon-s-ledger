class CreateSuperAdmin < ActiveRecord::Migration[6.0]
  def change
    create_table :super_admins do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
    end
  end
end
