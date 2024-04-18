public class ResizableElement{
	private int size;
	private Element elem;

	public ResizableElement(Element elem, int size){
		this.elem = elem;
		this.size = size;

	}

	public void resize(int size){
		this.size = size;
	}

	@Override
	public String toString() {
		StringBuilder s = new StringBuilder();
		for(int i = 0; i < elem.width * size; i++) {
			for(int j = 0; j < elem.height * size; j++) {
				s.append(getCharacter());
			}
			s.append("\n");
		}
		return s.toString();
	}

	private String getCharacter() {
		return "#";
	}
}