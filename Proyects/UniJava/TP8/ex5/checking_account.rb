require_relative 'account'
class CheckingAccount < Account

  def initialize(id, min_value)
    @id = id
    @min_value = -min_value
    @current_money = 0
  end

  def extract(cant)
    if(@current_money - cant < @min_value)
      raise "No cuenta con los fondos necesarios"
    end
    @current_money -= cant
  end

  def deposit(cant)
    @current_money += cant
  end

  def to_s
    "Cuenta #{@id} con saldo #{@current_money}"
  end
end
