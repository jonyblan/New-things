require_relative 'unitary_text'
class ItalicText < UnitaryText
  LETTER = "i"
  def initialize(text)
    super(text, LETTER)
  end
end
