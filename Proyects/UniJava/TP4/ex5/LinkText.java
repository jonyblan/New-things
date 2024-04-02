public class LinkText extends PlainText{
	private HtmlText previousText;
	private String link;

	public LinkText(HtmlText previousText, String link){
		super(previousText.source());
		this.previousText = previousText;
		this.link = link;
	}

	@Override
	public String source(){
		String ret = "<a href:>" + this.link + ">" + this.previousText.source() + "</a>";
		return ret;
	}
}