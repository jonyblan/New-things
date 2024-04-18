public class TextElement extends Element{
	private String data;
	public TextElement(String data){
		this.data = data;
	}

	public void setText(String data){
		this.data = data;
	}

	@Override
	public String getContents(){
		return data;
	}
}