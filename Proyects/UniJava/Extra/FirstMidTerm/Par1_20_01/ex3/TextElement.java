public class TextElement extends Element{
	private String value;
	
	public TextElement(String value){
		this.value = value;
	}

	@Override
	public String getContents(){
		return value;
	}

	public void setText(String value){
		this.value = value;
	}
}