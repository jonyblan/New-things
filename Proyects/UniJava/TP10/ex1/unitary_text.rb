require_relative 'plain_text'
class UnitaryText < PlainText
  def initialize(text, letter)
    super(text)
    @letter = letter
  end

  def source
    "<#{@letter}>#{super}</#{@letter}>"
  end
end
