public abstract class Element {
	public abstract String getContents();

	@Override
	public String toString() {
		return getContents();
	}

	public Element above(Element element){
		Element aux = new BinaryElement(this, element);
		return aux;
	}

	public Element below(Element element){
		Element aux = new BinaryElement(element, this);
		return aux;
	}

	public Element repeat(int cantTimes){
		Element aux = this;
		for(int i = 0; i < cantTimes - 1; i++){
			aux = new BinaryElement(aux, this);
		}
		return aux;
	}
}