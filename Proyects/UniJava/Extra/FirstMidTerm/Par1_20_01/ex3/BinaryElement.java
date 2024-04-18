public class BinaryElement extends Element{
	private Element above, below;

	public BinaryElement(Element above, Element below){
		this.above = above;
		this.below = below;
	}

	@Override
	public String getContents(){
		StringBuilder str = new StringBuilder();
		str.append(above.getContents());
		str.append("\n");
		str.append(below.getContents());
		return str.toString();
	}
}