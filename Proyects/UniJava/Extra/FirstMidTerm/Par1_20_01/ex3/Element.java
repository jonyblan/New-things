public abstract class Element {
	
	public abstract String getContents();

	@Override
	public String toString() {
		return getContents();
	}

	public Element above(Element elem){
		return new BinaryElement(this, elem);
	}

	public Element below(Element elem){
		return new BinaryElement(elem, this);
	}

	public Element repeat(int cantTimes){
		Element current = this;
		for(int i = cantTimes; i > 1; i--){
			current = new BinaryElement(current, current);
		}
		return current;
	}
}