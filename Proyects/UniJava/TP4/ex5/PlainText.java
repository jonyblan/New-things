public class PlainText implements HtmlText{
	private String text;

	public PlainText(String text){
		this.text = text;
	}

	public String getText(){
		return this.text;
	}

	public void setText(String text){
		this.text = text;
	}

	public String source(){
		return this.text;
	}

	@Override
	public String toString(){
		return this.source();
	}
}