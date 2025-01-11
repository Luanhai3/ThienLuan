class ChangeEmailAddressToNotNullInUsers < ActiveRecord::Migration[6.0]
  def change
    change_column_null :users, :email_address, false
  end
end
