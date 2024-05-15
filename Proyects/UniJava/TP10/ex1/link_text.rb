class LinkText < PlainText
  def initialize(link, text)
    @link = link
    super(text)
  end

  def source
    "<a href:\"#{@link}\">#{super}</a>"
  end
end
