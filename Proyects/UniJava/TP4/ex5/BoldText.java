public class BoldText extends PlainText{
	private PlainText previousText;

	public BoldText(HtmlText previousText){
		super(previousText.source());
		this.previousText = previousText;
	}

	@Override
	public String source(){
		String ret = "<b>" + this.previousText.source() + "</b>";
		return ret;
	}
}