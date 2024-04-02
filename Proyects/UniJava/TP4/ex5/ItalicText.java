public class ItalicText extends PlainText{
	private HtmlText previousText;

	public ItalicText(HtmlText previousText){
		super(previousText.source());
		this.previousText = previousText;
	}

	@Override
	public String source(){
		String ret = "<i>" + this.previousText.source() + "</i>";
		return ret;
	}
}