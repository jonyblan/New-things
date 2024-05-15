require_relative 'unitary_text'
class BoldText < UnitaryText
  LETTER = "b"
  def initialize(text)
    super(text, LETTER)
  end
end
