public abstract class Element{
	protected int width, height;

	public Element(int width, int height){
		this.width = width;
		this.height = height;
	}

	public String toString() {
		StringBuilder s = new StringBuilder();
		for(int i = 0; i < width; i++) {
			for(int j = 0; j < height; j++) {
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